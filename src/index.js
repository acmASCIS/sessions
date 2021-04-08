const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('../routes/authRoutes');
const postRoutes = require('../routes/postRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGOURI || '';

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use(postRoutes);

// connect to mongodb
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
    () => {
        console.log("connected to database");
    }
);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
