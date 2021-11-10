import React from 'react';

import SecondaryTitle from '../../atoms/SecondaryTitle/SecondaryTitle';
import Avatar from '../../atoms/Avatar/Avatar';
import ParagraphSecondary from '../../atoms/ParagraphSecondary/ParagraphSecondary';

import { CardProps } from './CardProps';

import './Card.scss';

const Card = (props: CardProps): JSX.Element => {
    const { image, title, titleColor, content } = props;
    return (
        <div className="card-wrapper">
            <SecondaryTitle title={title} color={titleColor} />
            <Avatar image={image && image} />
            <ParagraphSecondary content={content} />
        </div>
    );
};

export default Card;
