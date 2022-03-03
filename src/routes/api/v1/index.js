import {Router} from "express";
import authentication from './authentication'
import profile from './users'
import posts from './posts'
import jwt from '../../../middlewares/jwtMiddleware'

const router = Router()

router.use("/authentication", authentication);
router.use("/users",jwt, profile);
router.use("/posts",posts);

export default router;
