import React from 'react';

import { CardsGridProps } from './CardsGridProps';
import Card from '../../molecules/Card/Card';
import { v4 as uuidv4 } from 'uuid';

import './CardsGrid.scss';

const CardsGrid = (props: CardsGridProps): JSX.Element => {
    const { cards } = props;
    return (
        <div className="cards-grid">
            {cards.map((card) => {
                return <Card key={uuidv4()} {...card} />;
            })}
        </div>
    );
};

export default CardsGrid;
