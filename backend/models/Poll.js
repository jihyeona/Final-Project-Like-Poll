import mongoose from 'mongoose'
import Item from './Item'

const Poll = mongoose.model('Poll', {
  title: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: String,
  imageId: String,
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  items: [Item]
})

// Poll.index({ 'items': 1 })

export default Poll

// Damien's suggestions:
// Create mongoose.model('Item')
// const Item = mongoose.model('Item', {
  //pollId: how do we get the right pollId?
//   name: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   imageUrl: String,
//   imageId: String,
//   createdAt: {
//     type: Date,
//     default: () => new Date()
//   },
//   tags: {
//     type: String,
//     index: true
//   },
//   likes: [userId]
// })