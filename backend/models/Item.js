import mongoose from 'mongoose'
import Like from './Like'

const Item = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: String,
  imageId: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  tags: {
    type: String,
    index: true
  },
  likes: [Like]
})

export default Item
