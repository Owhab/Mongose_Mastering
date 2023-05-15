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

    

    // Creating User Schema using Inteface

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true

            },
            middleName: {
                type: String,
                required: false
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true,

        },
        email: {
            type: String,
            required: false
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContact: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        }
    })

    // Creating user Model

    const User = model<IUser>('User', userSchema);

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