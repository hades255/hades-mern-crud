const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(logger("tiny"));

// //middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use("/api/blogs", blogRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
