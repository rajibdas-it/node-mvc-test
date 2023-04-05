const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const jwt = require("jsonwebtoken");
const dbConnect = require("./utils/dbConnect");
const productsRouter = require("./routes/v1/products.route");
const viewCount = require("./middleware/viewCount");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bikers Ocean Server is running.");
});

// app.use(viewCount);

dbConnect();

app.use("/api/v1/products", productsRouter);

app.all("*", (req, res) => {
  res.send("No Url Found");
});
app.listen(port, () => {
  console.log(`Bikers Ocean server is running on port ${port}`);
});
