import { Router } from "express";
import task from "./task.routes";

const router = Router();

router.use(task);

export default router;
