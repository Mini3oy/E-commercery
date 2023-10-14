import mongoose from "mongoose";

const configOptons = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectUrl =
    "mongodb+srv://miniboysemail:123456789boy@cluster0.xrhrt9g.mongodb.net/";
  mongoose
    .connect(connectUrl, configOptons)
    .then(() => console.log("Ecommerce databese connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
