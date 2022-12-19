import express from 'express';
import { getStudents,createStudent } from '../controllers/student.js';
import student from '../models/student.js'
//initialise express router

const router = express.Router();

//create routes
//get route =>path and callback function
router.get('/', getStudents);
router.post('/', createStudent);



//export router

export default router;