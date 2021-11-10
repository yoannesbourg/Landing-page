import React from 'react';
import Logo from './components/atoms/Logo/Logo';
import NavLink from './components/atoms/NavLink/NavLink';
import CTA from './components/atoms/CTA/CTA';
import PrimaryTitle from './components/atoms/PrimaryTitle/PrimaryTitle';
import Paragraph from './components/atoms/Paragraph/Paragraph';
import SecondaryTitle from './components/atoms/SecondaryTitle/SecondaryTitle';
import Avatar from './components/atoms/Avatar/Avatar';
import ParagraphSecondary from './components/atoms/ParagraphSecondary/ParagraphSecondary';
import Card from './components/molecules/Card/Card';
const App = (): JSX.Element => {
    return (
        <>
            <Logo />
            <NavLink linkTo="/" title="Home" />
            <CTA linkTo="/" title="Join the cause" />
            <PrimaryTitle title="Lorem ipsum" />
            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque lacus in cursus congue." />
            <SecondaryTitle title="Connecting People" color="#EF7D00" />
            <Avatar />
            <ParagraphSecondary content="We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?" />
            <Card
                title="Connecting People"
                titleColor="#EF7D00"
                content="We’ll go the extra mile because we know connection is everything. So, when other mobile networks ask, how can we afford to connect remote places, we ask, how can we afford not to?"
            />
        </>
    );
};

export default App;
