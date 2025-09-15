import mongoose from "mongoose";
import { envConfig } from "@/config/index";

const connectDB = async () => {
  try {
    const mongoURI: string = envConfig.DB.MONGO_URI ?? "";

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in environment configuration");
    }

    mongoose.connect(mongoURI, {
      dbName: envConfig.DB.DB_NAME,
    });
    
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
  }
};

export default connectDB;
