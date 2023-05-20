import { HydratedDocument, Model } from "mongoose";

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



// Instance Method
export interface IUserMethods {
    fullName(): string;
  }


export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
     