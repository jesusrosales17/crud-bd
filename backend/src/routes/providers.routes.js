import { Router } from "express";
import { createProvider, deleteProvider, getProviders, updateProvider } from "../controllers/providers.controller.js";

const router = Router();

router.get('/providers', getProviders);
router.post('/providers', createProvider);
router.put('/providers/:cvproveedor', updateProvider);
router.delete('/providers/:cvproveedor', deleteProvider);

export default router;