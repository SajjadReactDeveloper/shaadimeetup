require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Get Values from .env file
const { PORT, MONGODB_URL } = process.env;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/profile", require("./routes/profile"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
