const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
// app.use(logger('dev'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }
);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
});