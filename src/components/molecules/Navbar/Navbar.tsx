import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Logo from '../../atoms/Logo/Logo';
import NavLink from '../../atoms/NavLink/NavLink';
import CTA from '../../atoms/CTA/CTA';
import { NavbarProps } from './NavbarProps';

import './Navbar.scss';

const Navbar = (props: NavbarProps): JSX.Element => {
    const { navLinks, cta } = props;
    return (
        <div className="navbar-wrapper">
            <Logo />
            <div className="navbar-links">
                {navLinks.map((link) => {
                    return <NavLink key={uuidv4()} {...link} />;
                })}
                <CTA {...cta} />
            </div>
        </div>
    );
};

export default Navbar;
