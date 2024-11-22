import {Router} from "express"; 
import { addProduct, deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', (req, res) => {
    res.send('products');
});

router.delete("/products",deleteProducts)
router.post("/products",addProduct)

export default router;