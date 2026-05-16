import mongoose, { Schema, model, models } from "mongoose"

const HandymanSchema = new Schema({
  name:            { type: String, required: true },
  email:           { type: String, required: true, unique: true, lowercase: true },
  password:        { type: String, required: true },
  phone:           { type: String, required: true },
  city:            { type: String, required: true },
  postalCode:      { type: String, required: true },
  skills:          [{ type: String }],
  bio:             { type: String },
  yearsExperience: { type: String },
  availability:    { type: String, default: "full-time" },
  status:          { type: String, enum: ["pending", "active", "suspended"], default: "pending" },
  feePercent:      { type: Number, default: 15 },
}, { timestamps: true })

export const Handyman = models.Handyman || model("Handyman", HandymanSchema)
