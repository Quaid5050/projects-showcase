import mongoose, { Schema, model, models } from "mongoose"

const JobSchema = new Schema({
  title:         { type: String, required: true },
  description:   { type: String, required: true },
  location:      { type: String, required: true },
  city:          { type: String, required: true },
  postalCode:    { type: String },
  serviceType:   { type: String, required: true },
  clientName:    { type: String },
  clientPhone:   { type: String },
  scheduledDate: { type: Date },
  status:        { type: String, enum: ["open", "assigned", "completed", "cancelled"], default: "open" },
  handymanId:    { type: Schema.Types.ObjectId, ref: "Handyman", default: null },
  jobValue:      { type: Number },
  feePercent:    { type: Number, default: 15 },
}, { timestamps: true })

export const Job = models.Job || model("Job", JobSchema)
