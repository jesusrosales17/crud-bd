import {Router} from "express"; 
import {getProducts,  deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', getProducts);
router.delete("/delete",deleteProducts)

export default router;