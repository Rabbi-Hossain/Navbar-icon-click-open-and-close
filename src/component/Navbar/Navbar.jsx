import { Menu, X } from "lucide-react";
import Nav from "../Nav/Nav";
import { useState } from "react";

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 5,
        name: "Blog",
        path: "/blog"
    }
];


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = navLinks.map(nav => <Nav key={nav.id} nav={nav}></Nav>)

    return (
        <nav className="flex  justify-between mx-20 mt-5">
            <span className="flex" onClick={() => setOpen(!open)}>
                {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}

                <ul className={`md:hidden absolute space-y-2 text-center bg-amber-200 duration-1000 ${open ? 'top-12' : '-top-40'}`}>
                    {links}
                </ul>
                <h3 className="ml-4">My Navbar</h3>
            </span>
            <ul className="md:flex hidden">
                {
                    links
                }
            </ul>

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;