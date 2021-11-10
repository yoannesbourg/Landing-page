import React from 'react';

import LogoIcon from '../../../img/logoicon.png';
import LogoText from '../../../img/logotext.png';

const Logo = (): JSX.Element => {
    return (
        <a href="/">
            <img src={LogoIcon} />
            <img src={LogoText} />
        </a>
    );
};

export default Logo;
