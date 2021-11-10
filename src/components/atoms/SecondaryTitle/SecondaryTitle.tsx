import React from 'react';

import { SecondaryTitleProps } from './SecondaryTitleProps';
import './SecondaryTitle.scss';

const SecondaryTitle = (props: SecondaryTitleProps): JSX.Element => {
    const { title, color } = props;
    return (
        <h5 className="secondary-title" style={{ color: color }}>
            {title}
        </h5>
    );
};

export default SecondaryTitle;
