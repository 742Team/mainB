const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/user");


const app = express();
app.use(userRoutes);
app.use(formidable());
app.use(cors());
require("dotenv").config();
mongoose.connect("mongodb+srv://DALM1:48714871@cluster0.dstcm.mongodb.net/test");
//mongoose.connect(process.env.MONGODB_URI);


app.get("*", (req, res) => {
    res.status(404).json("404 Error page not found.")
});

app.listen(PORT, () =>{
console.log("Serveur start on port 3000");
});