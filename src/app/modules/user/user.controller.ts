import { NextFunction, Request, Response } from "express";
import { createUsersToDB, getUsersFromDB } from "./user.service";

export const createUsers = async(req : Request, res : Response, next: NextFunction) => {

    const data = req.body

    const user = await createUsersToDB(data); 
    

    res.status(200).json({
        status: 'success',
        data: user,
    })
}


export const getUsers = async(req : Request, res : Response, next: NextFunction) => {
    
    const user = await getUsersFromDB(); 
    

    res.status(200).json({
        status: 'success',
        data: user,
    })
}


// Patthern

// Route -> Controller -> Service