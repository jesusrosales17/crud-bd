import { Router } from "express";
import {  getAllProviders } from "../controllers/providers.controller.js";

const router = Router();

router.get('/providers', getAllProviders);



export default router;