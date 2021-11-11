import React from 'react';

import CardsGrid from '../../organism/CardsGrid/CardsGrid';
import CoverSection from '../../molecules/CoverSection/CoverSection';
import { homepageData } from '../../../data/homepage';

const Homepage = (): JSX.Element => {
    return (
        <>
            {/* <CardsGrid cards={homepageData.cardsGrid} /> */}
            <CoverSection {...homepageData.coverSection} />
        </>
    );
};

export default Homepage;
