import express from 'express'
import MainController from '../controllers/MainController'

const router = express.Router()

router.post('/send_mail', ...MainController.sendMail)

export default router
