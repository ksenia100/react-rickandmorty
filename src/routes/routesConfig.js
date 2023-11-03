import HomePage from '@containers/HomePage';
import CharacterPage from '@containers/CharacterPage';
import EpisodePage from '@containers/EpisodePage';
import LocationPage from '@containers/LocationPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/characters',
        exact: true,
        component: CharacterPage
    },
    {
        path: '/episode',
        exact: true,
        component: EpisodePage
    },
    {
        path: '/location',
        exact: true,
        component: LocationPage
    }
];

export default routesConfig;