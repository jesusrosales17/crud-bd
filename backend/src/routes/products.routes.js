import {Router} from "express"; 
import { addProduct, deleteProducts } from "../controllers/products.controller.js";
import {getProducts,  deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', (req, res) => {
    res.send('products');
});

router.delete("/products",deleteProducts)
router.post("/products",addProduct)
router.get('/products', getProducts);
router.delete("/delete",deleteProducts)

export default router;