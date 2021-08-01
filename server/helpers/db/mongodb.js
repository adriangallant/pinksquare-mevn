const mongoose = require('mongoose');

const uri = "mongodb+srv://default-user:5LsQTKBzQD00VR9l@cluster0.ahac0.mongodb.net/test?retryWrites=true&w=majority"

const init = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error('error: ' + err.stack);
      process.exit(1);
    });
  mongoose.connection.on('open', () => {
    console.log('connected to database');
  });
};

mongoose.Promise = global.Promise;

module.exports = init;
