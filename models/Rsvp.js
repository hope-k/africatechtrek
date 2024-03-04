import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rsvp = mongoose.models.Rsvp || mongoose.model("Rsvp", rsvpSchema);
export default Rsvp;
