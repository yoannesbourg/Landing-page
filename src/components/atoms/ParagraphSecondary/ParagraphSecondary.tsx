import React from 'react';

import { ParagraphSecondaryProps } from './ParagraphSecondaryProps';
import './ParagraphSecondary.scss';

const ParagraphSecondary = (props: ParagraphSecondaryProps): JSX.Element => {
    const { content } = props;
    return <p className="paragraph-secondary">{content}</p>;
};

export default ParagraphSecondary;
