import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBookingInquiry extends Document {
  name: string;
  phone: string;
  email?: string;
  patientType: string;
  concernType: string;
  preferredDate?: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: Date;
}

const BookingInquirySchema = new Schema<IBookingInquiry>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    patientType: { type: String, required: true, trim: true },
    concernType: { type: String, required: true, trim: true },
    preferredDate: { type: String },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const BookingInquiry: Model<IBookingInquiry> =
  mongoose.models.BookingInquiry ||
  mongoose.model<IBookingInquiry>("BookingInquiry", BookingInquirySchema);

export default BookingInquiry;
