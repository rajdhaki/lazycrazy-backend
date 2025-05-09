import express from 'express'
import { createEmp, deleteEmp, getAllEmp, updateEmp } from '../controllers/employee.controller.js';
import {isAuthenicated} from '../middlewares/Authenicated.js'

const route=express.Router()

route.get("/",isAuthenicated,getAllEmp)
route.post("/",isAuthenicated,createEmp)
route.put("/:id",isAuthenicated,updateEmp)
route.delete("/:id",isAuthenicated,deleteEmp)


export default route;