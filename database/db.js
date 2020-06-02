const mongoose = require('mongoose');
//connecting to database
const db = 'mongodb+srv://othman:othman1995@cluster0-g5mec.mongodb.net/natours?retryWrites=true&w=majority';
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('Database connection is succeed!');
  })
  .catch((err) => {
    console.log(err);
  });