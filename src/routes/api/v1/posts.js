import {Router} from "express";
import * as PostController from  "../../../controllers/api/v1/posts"

const router = Router()

router.patch("/:id", PostController.updatePost)
router.get("/:id", PostController.returnPost)
router.delete("/:id", PostController.deletePost)
router.post("/:id/posts", PostController.createPost)
router.get("", PostController.returnListPost)
router.get("/:id/posts", PostController.returnListUserPost)
export default router;