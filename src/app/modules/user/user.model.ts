
    // Creating User Schema using Inteface

import { Model, Schema, model } from "mongoose";
import {IUser, IUserMethods, UserModel} from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, UserModel, IUserMethods>;

    const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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


    userSchema.static("getAdminUsers", async function getAdminUsers(){
        const admins = await this.find({role: 'admin'})
    })

    // Creating user Model
    userSchema.method('fullName', function fullName() {
        return this.name.firstName + ' ' + this.name.lastName;
      });

    const User = model<IUser, UserModel>('User', userSchema);

    
    export default User;