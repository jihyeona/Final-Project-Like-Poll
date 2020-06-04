import mongoose from 'mongoose'

const Poll = mongoose.model('Poll', {
  title: {
    type: String,
    required: true,
    unique: true
  },
  color: {
    type: String,
    required: true
  },
  items: {
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
  }
})

export default Poll
