import React from 'react';

import PrimaryTitle from '../../atoms/PrimaryTitle/PrimaryTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { CoverSectionProps } from './CoverSectionProps';
import './CoverSection.scss';

const CoverSection = (props: CoverSectionProps): JSX.Element => {
    const { title, content } = props;
    return (
        <div className="cover-section">
            <PrimaryTitle title={title} />
            <Paragraph content={content} />
        </div>
    );
};

export default CoverSection;
