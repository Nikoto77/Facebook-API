import {Router} from "express";
import * as UserController from  "../../../controllers/api/v1/users.js"

const router = Router()

router.post("/register", UserController.createUser)
router.post("/login", UserController.loginUser)

export default router;