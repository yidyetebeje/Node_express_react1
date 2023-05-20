import express from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser} from '../controllers/users.js'
const router = express.Router()
//router.get('/users',(req,res)=>{res.send("Hi hi hitire")})
router.get('/users',getUsers)
router.post('/user',createUser);
router.get('/user/:id',getUser)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
export default router