import User from "./user.model";

export const createUserToDB =async () => {
    const user1 = await new User({
        id: '06',
        role: 'student',
        password: 'sdfsdf',
        name: {
            firstName: "Sazzadul",
            lastName: "Kabir"
        },
        dateOfBirth: "15 May 2002",
        gender: "Male",
        email: 'sazzad@coder71.com',
        contactNo: "7r73sdfsd623754",
        emergencyContact: "623453",
        presentAddress: "Mirpur - 2, Dhaka"
    })

    await user1.save();
    console.log(user1)
    return user1;

    
}