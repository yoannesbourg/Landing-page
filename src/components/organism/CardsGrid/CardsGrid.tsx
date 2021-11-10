import React from 'react';

import { CardsGridProps } from './CardsGridProps';
import Card from '../../molecules/Card/Card';
import './CardsGrid.scss';

const CardsGrid = (props: CardsGridProps): JSX.Element => {
    const { cards } = props;
    return (
        <div className="cards-grid">
            {cards.map((card, i) => {
                return <Card key={i} {...card} />;
            })}
        </div>
    );
};

export default CardsGrid;
