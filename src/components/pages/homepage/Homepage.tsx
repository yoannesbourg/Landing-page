import React from 'react';
import CardsGrid from '../../organism/CardsGrid/CardsGrid';

const homepageData = {
    cardsGrid: [
        {
            title: 'Connecting People',
            titleColor: '#EF7D00',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
        {
            title: 'Connecting People',
            titleColor: '#CF0D63',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
        {
            title: 'Connecting People',
            titleColor: '#522773',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
        {
            title: 'Connecting People',
            titleColor: '#EF7D00',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
        {
            title: 'Connecting People',
            titleColor: '#CF0D63',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
        {
            title: 'Connecting People',
            titleColor: '#522773',
            content:
                'We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?',
        },
    ],
};

const Homepage = (): JSX.Element => {
    return (
        <>
            <CardsGrid cards={homepageData.cardsGrid} />
        </>
    );
};

export default Homepage;
