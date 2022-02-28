import {Router} from "express";
import router from "./api/v1/index.js"
const router2 = Router();
router.use("/api/v1",router);

export default router2;