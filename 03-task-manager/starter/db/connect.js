const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, {
    // this is for removing deprication warnings if you are using version 6 you don't need it
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

//   .then(() => console.log("connected to the db..."))
//   .catch((err) => console.log(err));
