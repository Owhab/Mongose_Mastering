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

    // Creating an Interface
    interface IUser{
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string
        };
        dateOfBirth?: string;
        gender: "Male" | "Female";
        email?: string;
        contactNo: string;
        emergencyContact: string;
        presentAddress: string
    }

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
            id: '01',
            role: 'student',
            password: 'uehfc9w9',
            name: {
                firstName: "Abdul",
                lastName: "Owhab"
            },
            dateOfBirth: "15 November 1998",
            gender: "Male",
            email: 'owhab@coder71.com',
            contactNo: "01771176606",
            emergencyContact: "01886644811",
            presentAddress: "Mirpur - 2, Dhaka"
        })
    
        await user1.save()
    
        
    }

    
    
    
    // res.send('Hello Next Level Coders!')
    // next();

  
  })

  export default app;