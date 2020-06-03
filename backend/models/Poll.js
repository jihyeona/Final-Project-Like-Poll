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
  }
})

export default Poll
