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


// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
  }
     