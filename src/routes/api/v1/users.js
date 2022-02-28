import {Router} from "express";
import * as ProfileController from  "../../../controllers/api/v1/profile.js"

const router = Router()

router.patch("/:id/profile", ProfileController.updateProfile)
router.get("/:id/profile", ProfileController.returnProfile)
router.delete("/:id", ProfileController.deleteProfile)

export default router;