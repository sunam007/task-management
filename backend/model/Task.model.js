import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "This field is required"],
    }, // String is shorthand for {type: String}
    description: {
      type: String,
      required: [true, "This field is required"],
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("tasks" , taskSchema)

export default TaskModel
