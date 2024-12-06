
import { HomeOptionsList } from '../shared';

export const HomePage = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Hola!!, Bienvenido de nuevo.
            </h1>
            <p className="text-gray-400 dark:text-gray-400 mb-10">Accede a toda la informacion de tu negocio en un solo lugar.</p>

            <HomeOptionsList />
        </div>
    );
}

export default HomePage;
