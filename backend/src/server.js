import express from 'express'
import providerRoutes from './routes/providers.routes.js'

export const startServer = () => {
    const app = express();
    const port = process.env.PORT || 3000

    app.use(express.json())
    app.use('/api', providerRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}
