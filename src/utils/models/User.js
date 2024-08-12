import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
    },
    scores: {
      type: Map,  
      of: Number, 
      default: {}, 
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
 