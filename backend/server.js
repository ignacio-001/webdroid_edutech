require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginRoutes=require('./routes/loginRoute')
app.use(express.json());
var cors=require('cors');
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})
// this below comment should be used for protecting other routes
// app.use(requireAuth);

app.use('/api',loginRoutes)
mongoose.connect(process.env.MONGO_URL).then(()=>
app.listen(process.env.PORT, () => {
  console.log("running on port", process.env.PORT,'and connected to database');
})
).catch((error)=>{
    console.log(error);
})
