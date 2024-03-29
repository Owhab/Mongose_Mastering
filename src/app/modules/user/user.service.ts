
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUsersToDB =async (payload: IUser): Promise<IUser> =>{
    const user1 = await new User(payload)

    await user1.save();
    user1.fullName();
    console.log(user1)
    console.log(user1.fullName())
    return user1;


    
}

export const getUsersFromDB = async ():Promise<IUser[]> => {

    const users = await User.find();
    return users;

}

export const getUserByIdFromDB = async (payload: string):Promise<IUser | null> => {

    const user = await User.findOne({id: payload})
    console.log(user)
    return user;

}

export const getAdminUsersFromDB = async ()=> {

    const admins = await User.getAdminUsers();
    return admins;
}