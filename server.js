import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import mutationsRoutes from './routes/adn.routes.js'
import errorHandler from './middleware/error.middleware.js'
////
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your specific origin
    credentials: true, // Enable credentials support
  }));

  app.get('/', (req,res)=>{
    res.status(200).json({ message: "Conexion exitosa" });
})

app.use('', mutationsRoutes)
app.use(errorHandler);

const port  = process.env.PORT || 80;

mongoose.connect(process.env.MongoSRV)
.then(()=>{
    app.listen(port,()=>{
       console.log(`server listening on ${port}`);
    });
})
.catch(err =>console.log(err))

export default app