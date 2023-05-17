import express from "express";
import { createUsers, getUserById, getUsers } from "./user.controller";

const router = express.Router();

router.get('/', getUsers)
router.post('/create-user', createUsers)
router.get('/:id', getUserById)


export default router;