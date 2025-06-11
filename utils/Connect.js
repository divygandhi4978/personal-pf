import mongoose from "mongoose";

const uri = process.env.MONGOURI;

const connect = () => {
    if (mongoose.connections[0].readyState) return;
  mongoose.connect(uri);
};

export default connect;