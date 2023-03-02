import { Router } from "express";
import clientRouter from "../routers/client.router.js"
import urlRouter from "../routers/url.router.js"

const router = Router();

router.use(clientRouter);
router.use(urlRouter);

export default router