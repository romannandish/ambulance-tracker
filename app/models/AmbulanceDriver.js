import mongoose from "mongoose";

const ambulanceDriverSchema = new mongoose.Schema({
  name: String,
  dob: String,
  number: String,
  vehicleNumber: String,
  hospitalName: String,
  driverId: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.models.AmbulanceDriver || mongoose.model("AmbulanceDriver", ambulanceDriverSchema);
