import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import NavLink from '../../atoms/NavLink/NavLink';
import CTA from '../../atoms/CTA/CTA';
import PrimaryTitle from '../../atoms/PrimaryTitle/PrimaryTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SecondaryTitle from '../../atoms/SecondaryTitle/SecondaryTitle';
import Avatar from '../../atoms/Avatar/Avatar';
import ParagraphSecondary from '../../atoms/ParagraphSecondary/ParagraphSecondary';
import Card from '../../molecules/Card/Card';
const DesignSystem = (): JSX.Element => {
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

export default DesignSystem;
