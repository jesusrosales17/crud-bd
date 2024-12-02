import {Router} from "express"; 
import {getProducts,  deleteProducts, updateProducts } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', getProducts);
router.post('/products', getProducts);
router.delete("/products/:cvproducto",deleteProducts);
router.put("/products/:cvproducto",updateProducts)

export default router;