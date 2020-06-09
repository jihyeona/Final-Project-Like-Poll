import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import dotenv from 'dotenv'
import cloudinaryframework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'
import Item from './models/Item'
import User from './models/User'
import Poll from './models/Poll'

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

// this is the endpoint to fetch the info of existing users
app.get('/users', async (req, res) => {
  const exsitingUsers = await User.find().sort({ createdAt: 'asc' })
  if (exsitingUsers) {
    res.status(201).json(exsitingUsers)
  } else {
    res.status(401).json({ message: 'Could not find existing users' })
  }
})
// this is the endpoint to sign up new users
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password: bcrypt.hashSync(password) })
    const saved = await user.save()
    res.status(201).json({
      name: saved.name,
      userId: saved._id,
      accessToken: saved.accessToken,
      email: saved.email
    })
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err.errors })
  }
})

app.post('/sessions', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        name: user.name,
        userId: user._id,
        accessToken: user.accessToken,
        profileImage: user.profileImage,
        email: user.email,
        message: 'You are logged in'
      })
    } else {
      res.status(404).json({ notFound: true })
    }
  } catch (err) {
    res.status(404).json({ notFound: true })
  }
})
// this is the endpoint to update profile image
app.put('/users/:id', authenticateUser)
app.put('/users/:id', parser.single('image'), async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.user._id }, { profileImage: req.file.path }, { new: true })
    res.json(user)
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

// this is the endpoint to fetch the info of existing polls
app.get('/polls', async (req, res) => {
  const ongoingPolls = await Poll.find().sort({ createdAt: 'desc' }).limit(20).exec()
  if (ongoingPolls) {
    res.status(201).json(ongoingPolls)
  } else {
    res.status(401).json({ message: 'Could not find ongoing polls' })
  }
})
// this is the endpoint to add new polls 
app.post('/polls', parser.single('pollimage'), async (req, res) => {
  try {
    const poll = new Poll({
      title: req.body.title,
      imageUrl: req.file.path,
      imageId: req.file.filename,
      items: []
    })
    const saved = await poll.save()
    res.status(201).json({
      title: saved.title,
      imageUrl: saved.imageUrl,
      imageId: saved.imageId,
      pollId: saved._id,
      items: []
    })
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

// this is the endpoint to fetch the info of an existing poll
app.get('/polls/:pollId', async (req, res) => {
  const { pollId } = req.params
  const poll = await Poll.findById(pollId)
  if (poll) {
    res.status(201).json(poll)
  } else {
    res.status(401).json({ message: `Could not find a poll by id ${pollId}` })
  }
})

// this is the endpoint to add new items under a poll 
app.post('/polls/:pollId', parser.single('itemimage'), async (req, res) => {
  try {
    const { pollId } = req.params
    const poll = await Poll.findOneAndUpdate(
      { _id: pollId },
      {
        $push: {
          items: {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.file.path,
            imageId: req.file.filename,
            itemId: req.body._id,
            likes: []
          }
        }
      },
      { new: true, upsert: true })
    res.status(201).json(poll)
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})
// this is the endpoint to push a like under an item.
app.post('/items/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params
    const poll = await Poll.findOneAndUpdate(
      { 'items._id': itemId },
      {
        $push: {
          'items.0.likes': {
            'userId': req.body.userId
          }
        }
      },
      { new: true, upsert: true })
    res.status(201).json(poll)
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

// this is the endpoint to fetch the info of an item under an existing poll. Do I need it or shall I use the json of a poll from app.get('polls/:pollId')?
// app.get('/items/:itemId', async (req, res) => {
//   const { itemId } = req.params
//   const item = await Item.findById(itemId)
//   if (item) {
//     res.status(201).json(item)
//   } else {
//     res.status(401).json({ message: `Could not find an item by id ${itemId}` })
//   }
// })





app.get('/users/:id/secret', authenticateUser)
app.get('/users/:id/secret', (req, res) => {
  const secretMessage = `This is profile page for ${req.user.name}.`
  res.status(201).json({ secretMessage });
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
