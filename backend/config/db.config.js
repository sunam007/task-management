import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@codesquad.bhcgs3q.mongodb.net/?retryWrites=true&w=majority&appName=codesquad`;

    await mongoose.connect(uri);

    console.log(`db is connected`);
  } catch (error) {
    await mongoose.disconnect();
    process.exit(1);
  }
};
