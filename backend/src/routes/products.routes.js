import {Router} from "express"; 
import {getProducts,  deleteProducts, updateProducts,createProducts } from "../controllers/products.controller.js";

const router = Router();


router.delete("/products/:cvproducto",deleteProducts)
router.get('/products', getProducts);
router.put("/products/:cvproducto",updateProducts)
router.post("/products",createProducts)

export default router;