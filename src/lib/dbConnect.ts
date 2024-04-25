import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export default async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }
  try {
    const db = await mongoose.connect(
      `${process.env.MONGODB_URI}Anonymous-Feedback` || ""
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected Successfully");
  } catch (error: any) {
    console.log("Database Connection failed");
    process.exit(1);
  }
}
