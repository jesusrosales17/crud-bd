import {Router} from "express"; 
import {getProducts,  deleteProducts, addProduct } from "../controllers/products.controller.js";

const router = Router();


router.delete("/products",deleteProducts)
router.post("/products",addProduct)
router.get('/products', getProducts);
router.delete("/delete",deleteProducts)

export default router;