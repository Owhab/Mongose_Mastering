import express, { Application } from 'express';
import cors from 'cors';

// Import User Routes
import userRoutes from "./app/modules/user/user.route";




const app : Application= express()
app.use(cors());

// Parsing Data
app.use(express.json());

// URL Encode
app.use(express.urlencoded());





// app.get('/api/v1/user', userRoutes)

app.use('/api/v1/user', userRoutes)

export default app;

  /*
    Steps to Inserting data to mongodp
    Step- 1: Interface - Done
    Step- 2: Schema - Done
    Step- 3: Model
    Step- 4: Database Query
    */


  /*
  Modular Breakdown
  1. Interface - interface.ts
  2. Schema, Model - model.ts
  3. Route, Route Function - controller.ts
  4. Database Queries - service

  */