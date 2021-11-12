import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FooterLink from '../../atoms/FooterLink/FooterLink';
import CTA from '../../atoms/CTA/CTA';
import { FooterProps } from './FooterProps';
import FooterLogo from '../../../img/footerlogo.png';
import './Footer.scss';

const Footer = (props: FooterProps): JSX.Element => {
    const { navLinks, cta } = props;
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <a href="/" className="footer-logo">
                    <img src={FooterLogo} />
                </a>
                {navLinks.map((link, i) => {
                    if (i % 2 === 0) {
                        if (navLinks[i + 1]) {
                            return (
                                <div>
                                    <FooterLink key={uuidv4()} {...navLinks[i]} />
                                    <FooterLink key={uuidv4()} {...navLinks[i + 1]} />
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <FooterLink key={uuidv4()} {...navLinks[i]} />
                                </div>
                            );
                        }
                    }
                })}
                <div className="cta-wrapper">
                    <CTA {...cta} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
