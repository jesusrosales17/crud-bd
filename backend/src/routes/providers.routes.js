import { Router } from "express";
import { addProvider, deleteProvider, getAllProviders, updateProvider } from "../controllers/providers.controller.js";

const router = Router();

router.get('/providers', getAllProviders);
router.post('/providers', addProvider);
router.put('/providers/:cvproveedor', updateProvider);
router.delete('/providers/:cvproveedor', deleteProvider);

export default router;