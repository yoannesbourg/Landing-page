import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Logo from '../../atoms/Logo/Logo';
import NavLink from '../../atoms/NavLink/NavLink';
import CTA from '../../atoms/CTA/CTA';
import { NavbarProps } from './NavbarProps';

import { AiOutlineMenu } from 'react-icons/ai';
import './Navbar.scss';

const Navbar = (props: NavbarProps): JSX.Element => {
    const { navLinks, cta } = props;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeBackground = () => {
        if (window.scrollY <= 153) {
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            {/* Desktop Navbar */}
            <div className={isScrolled ? 'navbar-wrapper active' : 'navbar-wrapper'}>
                <div className="navbar-content">
                    <Logo />
                    <div className="navbar-links">
                        {navLinks.map((link) => {
                            return <NavLink key={uuidv4()} {...link} />;
                        })}
                        <CTA {...cta} />
                    </div>
                </div>
            </div>
            {/* Responsive Navbar */}
            <div className="burguer-menu" style={{ background: isMenuOpen ? '#184a7c' : 'transparent' }}>
                <div className="burguer-menu-icon">
                    <AiOutlineMenu onClick={handleMenu} style={{ color: '#0A2540' }} />
                </div>
                <div className="burguer-menu-content" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                    <div className="navbar-links">
                        {navLinks.map((link) => {
                            return <NavLink key={uuidv4()} {...link} />;
                        })}
                        <div className="cta">
                            <CTA {...cta} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
