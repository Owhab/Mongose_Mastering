import IUser from "./user.interface";
import User from "./user.model";

export const createUsersToDB =async (payload: IUser): Promise<IUser> =>{
    const user1 = await new User(payload)

    await user1.save();
    console.log(user1)
    return user1;

    
}

export const getUsersFromDB = async () => {

    const users = await User.find();
    return users;

}