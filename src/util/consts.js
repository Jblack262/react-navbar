import {Home, About, Store} from '../pages';
import {FaInstagram, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
        page: <Home />
    },
    {
        id: 2,
        url: "/about",
        text: "About",
        page: <About />
    },
    {
        id: 3,
        url: "/store",
        text: "Store",
        page: <Store />
    },
]

export const socials = [
    {
        id: 1,
        url: "/",
        icon: <FaInstagram />
    },
    {
        id: 2,
        url: "/",
        icon: <FaFacebook />
    },
    {
        id: 3,
        url: "/",
        icon: <FaTwitter />
    },
    {
        id: 4,
        url: "/",
        icon: <FaGithub />
    },
]