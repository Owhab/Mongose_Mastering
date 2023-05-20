import express from "express";
import { createUsers, getAdminUsers, getUserById, getUsers } from "./user.controller";

const router = express.Router();

router.get('/', getUsers)
router.get('/admin', getAdminUsers)
router.get('/:id', getUserById)
router.post('/create-user', createUsers)


export default router;