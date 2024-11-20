import {Router} from "express"; 
import { deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', (req, res) => {
    res.send('products');
});

router.delete("/delete",deleteProducts)

export default router;