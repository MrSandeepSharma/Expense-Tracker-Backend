import mongoose from "mongoose";
import { DB__NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `mongodb://localhost:27017/${DB__NAME}`
        )

        console.log(
            `MongoDB connected !! connection host : ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
}

export default connectDB;