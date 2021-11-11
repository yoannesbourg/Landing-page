import React from 'react';

import { FooterLinkProps } from './FooterLinkProps';
import './FooterLink.scss';

const FooterLink = (props: FooterLinkProps): JSX.Element => {
    const { title, linkTo } = props;
    return (
        <a href={linkTo} className="footer-link-wrapper">
            <div className="separator" />
            <p className="footer-link">{title}</p>
        </a>
    );
};

export default FooterLink;
