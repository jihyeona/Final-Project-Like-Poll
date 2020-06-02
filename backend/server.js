import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import dotenv from 'dotenv'
import cloudinaryframework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'
import Product from './models/Product'
import User from './models/User'

const cloudinary = cloudinaryframework.v2

dotenv.config()

cloudinary.config({
  cloud_name: 'dystmqbrf',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})

const parser = multer({ storage })

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/pollAPI'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)
mongoose.Promise = Promise

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header('Authorization')
    })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({ loggedOut: true, message: 'Please try logging in again' })
    }
  } catch (err) {
    res.status(403).json({ message: 'Access token is missing or wrong', errors: err })
  }

}

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password: bcrypt.hashSync(password) })
    const saved = await user.save()
    res.status(201).json({ name: saved.name, userId: saved._id, accessToken: saved.accessToken })
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err.errors })
  }
})

app.post('/users/:id', async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, { profileImage: req.body.image }, { new: true })
  res.json({ imageURL: user.profileImage }) // WHAT DOES imageURL do here? connect it with ProfileImage component, cloudnary
})


app.get('/users/:id/secret', authenticateUser)
app.get('/users/:id/secret', (req, res) => {
  const secretMessage = `This is profile page for ${req.user.name}.`
  res.status(201).json({ secretMessage });
})

app.post('/sessions', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ name: user.name, userId: user._id, accessToken: user.accessToken, message: 'You are logged in' })
    } else {
      res.status(404).json({ notFound: true })
    }
  } catch (err) {
    res.status(404).json({ notFound: true })
  }
})


app.post('/products', parser.single('image'), async (req, res) => {
  try {
    const product = await new Product({ name: req.body.name, description: req.body.description, imageUrl: req.file.path, imageId: req.file.filename }).save()
    res.json(product)
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
