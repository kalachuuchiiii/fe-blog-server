require("dotenv").config();
const express = require("express"); 
const cors = require("cors");
const app = express();
const { connectDb } = require("./src/db/index.js");
const router = require("./src/router/router.js");


const { CS_URL, PORT  } = process.env;

app.use(express.json({
  limit: "50mb"
}))
app.use(cors({
  origin: CS_URL
}))

app.use("/api", router);

connectDb().then(() => {
  
  app.listen(PORT, () => {
  
})
}).catch((e) => {
  
})

module.exports = app;


