import express from "express"
import { getNotifs , getNotifsID, saveNotifs, updateNotifs, delNotifs} from "../controller/controllerNotifikasi.js"

const router = express.Router()

router.get('/', getNotifs)
router.get('/:id', getNotifsID)
router.post('/', saveNotifs)
router.put('/:id', updateNotifs)
router.delete('/:id', delNotifs)

export default router