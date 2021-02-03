import { Schema, model } from 'mongoose'

export const PhotoSchema = new Schema({
  cols: Number,
  img: Buffer,
})

export default model('Photo', PhotoSchema)
