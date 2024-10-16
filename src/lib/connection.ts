import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI || "")
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((error) => {
        console.log("Error connecting to the database");
      });
  } catch (error) {
    console.log("Error connecting to the database");
  }
}
