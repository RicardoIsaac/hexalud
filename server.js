const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const mutationsRoutes = require('./routes/adn.routes')
const errorHandler = require('./middleware/error.middleware')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your specific origin
    credentials: true, // Enable credentials support
  }));

  app.get('/', (req,res)=>{
    res.send("Home page")
})

app.use('', mutationsRoutes)
app.use(errorHandler);
const port  = process.env.PORT || 5000;

mongoose.connect(process.env.MongoSRV)
.then(()=>{
    app.listen(port,()=>{
        console.log(`server listening on ${port}`);
    });
})
.catch(err =>console.log(err))