import mongoose from 'mongoose'

const Item = mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  imageUrl: String,
  imageId: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

export default Item
