import mongoose from "mongoose";

//connect to mongoosedb
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch {
    (error) => {
      console.log(error);
      process.exit(1);
    };
  }
};
