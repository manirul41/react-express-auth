const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// local database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection success");
  })
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(authRoutes);

//view engine
//app.set('view engine', 'html')

// listening
app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
