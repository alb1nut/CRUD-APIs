import express from 'express';
import { getStudents } from '../controllers/student.js';

//initialise express router

const router = express.Router();

//create routes
//get route =>path and callback function
router.get('/', getStudents);


//export router

export default router;