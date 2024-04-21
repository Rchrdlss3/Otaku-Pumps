import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import RegistrationPage from "../pages/RegistrationPage";
import WorkoutsPage from "../pages/WorkoutsPage";
import MusicPage from "../pages/MusicPage";
import AnimePage from "../pages/AnimePage";


export const IMAGE_URL = 'https://rchrdlss3.github.io/otaku-pumps-images/';

export const SLOGAN = 'The App for Anime x Gym Rats';

export const BACK_END_URL = 'http://localhost:3000';

export const HTTP_STATUS = {
    'FAILURE' : 'FAILURE',
    'SUCCESS' : 'SUCCESS'
}

export const NAVIGATION_LINKS = new Map([
    ["home", {
        path: "/",
        name: "Home",
        element: <HomePage />,
        show: true
    }],
    ["anime", {
        path: "/anime",
        name: "Anime",
        element: <AnimePage />,
        show: true
    }],
    ["music", {
        path: "/music",
        name: "Music",
        element: <MusicPage />,
        show: true
    }],
    ["workout", {
        path: "/workouts",
        name: "Workouts",
        element: <WorkoutsPage />,
        show: true
    }],
    ["signin", {
        path: "/sign-in",
        name: "Sign In",
        element: <SignInPage />,
        show: false
    }],
    ["registration", {
        path: "/registration",
        name: "Registration",
        element: <RegistrationPage />,
        show: false
    }]
])