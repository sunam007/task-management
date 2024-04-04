import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "This field is required"],
    },
    description: {
      type: String,
      required: [true, "This field is required"],
    },
    status: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: [true, "This field is required"],
    },

  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", TaskSchema);
