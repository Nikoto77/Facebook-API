import {Router} from "express";
import authentication from './authentication'
import user from './users'
import posts from './posts'
import jwtMiddleware from '../../../middlewares/jwtMiddleware'

const router = Router()

router.use("/authentication", authentication);
router.use("/users",jwtMiddleware({ secret: 'SECRET' }), user);
router.use("/posts",jwtMiddleware({ secret: 'SECRET' }),posts);

export default router;
