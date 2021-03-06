const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(logger('dev'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

app.use(require('./routs/apiRouts'));
app.use(require('./routs/htmlRouts'));

app.listen(PORT, ()=>{
    console.log(`Server on PORT: ${PORT}`);
});