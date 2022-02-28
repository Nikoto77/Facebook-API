import {Router} from "express";
import authentication from './authentication'
import profile from './users'
import posts from './posts'

const router = Router()

router.use("/authentication", authentication);
router.use("/users", profile);
router.use("/posts",posts);

export default router;
