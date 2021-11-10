import React from 'react';

import { CTAProps } from './CTAProps';
import './CTA.scss';

const CTA = (props: CTAProps): JSX.Element => {
    const { title, linkTo } = props;
    return (
        <a href={linkTo}>
            <p className="cta-text">{title}</p>
        </a>
    );
};

export default CTA;
