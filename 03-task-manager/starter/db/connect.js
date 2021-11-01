const mongoose = require("mongoose");

const connectionString = `mongodb+srv://Ashish-Salve:17082001@nodeexpressprojects.r1uum.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    // this object is for error/worning in the console
    // this is for v5 and we dont need it in v6
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
