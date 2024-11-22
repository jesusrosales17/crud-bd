import express from 'express'
import cors from 'cors'
import providerRoutes from './routes/providers.routes.js'
import productsRoutes from './routes/products.routes.js'

export const startServer = () => {
    const app = express();
    const port = process.env.PORT || 3000

    app.use(cors({
        origin: 'http://localhost:5173'
    }));
    app.use(express.json())
    app.use('/api', providerRoutes);
    app.use('/api', productsRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}
