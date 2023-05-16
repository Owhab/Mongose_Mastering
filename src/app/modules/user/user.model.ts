
    // Creating User Schema using Inteface

import { Schema, model } from "mongoose";
import IUser from "./user.interface";

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

    export default User;