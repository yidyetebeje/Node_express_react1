import express from 'express'
import { getTicket,getTickets,createTicket,updateTicket,deleteTicket } from '../controller/tickets.js'

// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   })
//   const upload = multer({ storage: storage });


const router = express.Router()

router.get('/tickets',getTickets)
router.post('/ticket',createTicket)
router.get('/ticket/:id',getTicket)
router.delete('/ticket/:id',deleteTicket)
router.put('/ticket/:id',updateTicket)

export default router