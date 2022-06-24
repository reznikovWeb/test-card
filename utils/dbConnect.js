import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://test:123qwe@cluster0.ok666.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export default dbConnect;
