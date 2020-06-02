import mongoose from 'mongoose'

const Item = mongoose.model('Item', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: String,
  imageId: String
})

export default Item
