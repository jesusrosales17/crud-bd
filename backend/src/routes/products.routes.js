import {Router} from "express"; 
import { deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.delete("/delete",deleteProducts)

export default router;