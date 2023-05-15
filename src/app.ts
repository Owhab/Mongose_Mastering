import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';



const app : Application= express()
app.use(cors());

// Parsing Data
app.use(express.json());

// URL Encode
app.use(express.urlencoded());



app.get('/', (req : Request, res : Response, next: NextFunction) => {
    res.send('Hello Next Level Coders!')
    next();

  
  })

  export default app;