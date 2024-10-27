
import React from 'react';

const Navbar = () => {


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" },
        { id: 6, path: "/faq", name: "FAQ" },
      ];
      
      


    return (
        <nav>
            {
                routes.map(route => <li key={route.id}><a href={`route.path`}>{route.name}</a></li>)
            }
        </nav>
    );
};

export default Navbar;