import { Model } from "mongoose";

// Creating an Interface
export interface IUser{
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

// Statics 
interface UserModel extends Model<IUser> {
    getAdminUsers(): IUser[];
  }



// Instance Method
export interface IUserMethods {
    fullName(): string;
  }
     