require('dotenv').config({path:"./config.env"});
const express = require("express");
const connectDB = require("./config/mongoose.config");

connectDB();




const app = express();

app.use(express.json());


app.use("/api/auth", require("./routes/auth"))

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });