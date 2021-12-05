const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleware/authMiddleware");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

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
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//view engine
//app.set('view engine', 'html')

// router
app.get("*", checkUser);
app.use(authRoutes);

// listening
app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
