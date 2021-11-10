import React from 'react';

import { PrimaryTitleProps } from './PrimaryTitleProps';
import './PrimaryTitle.scss';

const PrimaryTitle = (props: PrimaryTitleProps): JSX.Element => {
    const { title } = props;
    return <h3 className="primary-title">{title}</h3>;
};

export default PrimaryTitle;
