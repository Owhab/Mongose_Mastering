import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';



const app : Application= express()
app.use(cors());

// Parsing Data
app.use(express.json());

// URL Encode
app.use(express.urlencoded());



app.get('/', (req : Request, res : Response, next: NextFunction) => {
    
    /*
    Steps to Inserting data to mongodp
    Step- 1: Interface
    Step- 2: Schema
    Step- 3: Model
    Step- 4: Database Query
    */

    // Creating an Interface
    interface IUser{
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string
        };
        dateOfBirth?: string;
        gender: "Male" | "Female";
        email?: string;
        contactNo: string;
        emergencyContact: string;
        presentAddress: string
    }
    
    
    // res.send('Hello Next Level Coders!')
    // next();

  
  })

  export default app;