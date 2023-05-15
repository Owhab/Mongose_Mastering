import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';



const app : Application= express()
app.use(cors());

// Parsing Data
app.use(express.json());

// URL Encode
app.use(express.urlencoded());



app.get('/', (req : Request, res : Response, next: NextFunction) => {
    
    /*
    Steps to Inserting data to mongodp
    Step- 1: Interface - Done
    Step- 2: Schema - Done
    Step- 3: Model
    Step- 4: Database Query
    */

    


    const createUser =async () => {
        const user1 = new User({
            id: '02',
            role: 'student',
            password: 'jheubci',
            name: {
                firstName: "Md",
                lastName: "Shakil"
            },
            dateOfBirth: "15 November 2000",
            gender: "Male",
            email: 'shakil@coder71.com',
            contactNo: "837238478",
            emergencyContact: "7348723",
            presentAddress: "Mirpur - 2, Dhaka"
        })
    
        await user1.save();
        console.log(user1)
    
        
    }

    createUser();

    
    
    
    // res.send('Hello Next Level Coders!')
    // next();

  
  })

  export default app;