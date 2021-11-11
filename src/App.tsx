import { relative } from 'path/posix';
import React from 'react';

import Navbar from './components/molecules/Navbar/Navbar';
import Homepage from './components/pages/homepage/Homepage';
import { navbarData } from './data/navbar';
const App = (): JSX.Element => {
    return (
        <div>
            <Navbar {...navbarData} />
            <Homepage />
        </div>
    );
};

export default App;
