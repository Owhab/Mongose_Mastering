import { NextFunction, Request, Response } from "express";
import { createUsersToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";


// Post user data to mongodb
export const createUsers = async(req : Request, res : Response, next: NextFunction) => {

    const data = req.body

    const user = await createUsersToDB(data); 
    

    res.status(200).json({
        status: 'success',
        data: user,
    })
}

// Getting data from mongodb
export const getUsers = async(req : Request, res : Response, next: NextFunction) => {
    
    const user = await getUsersFromDB(); 
    

    res.status(200).json({
        status: 'success',
        data: user,
    })
}


// Get a single user from mongodb database

export const getUserById =async (req:Request, res: Response, next: NextFunction) => {

    const {id} = req.params;

    const user = await getUserByIdFromDB(id);

    res.status(200).json({
        status: 'success',
        data: user,
    })
    
}


// Patthern

// Route -> Controller -> Service