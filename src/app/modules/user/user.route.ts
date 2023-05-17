import express from "express";
import { createUsers, getUsers } from "./user.controller";

const router = express.Router();

router.get('/', getUsers)
router.post('/create-user', createUsers)

export default router;