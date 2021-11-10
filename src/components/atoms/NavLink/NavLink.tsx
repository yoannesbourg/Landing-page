import React from 'react';

import { NavLinkProps } from './NavLinkProps';
import './NavLink.scss';

const NavLink = (props: NavLinkProps): JSX.Element => {
    const { title, linkTo } = props;
    return (
        <a href={linkTo}>
            <p className="navlink">{title}</p>
        </a>
    );
};

export default NavLink;
