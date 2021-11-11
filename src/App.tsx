import React from 'react';

import Navbar from './components/molecules/Navbar/Navbar';
import Homepage from './components/pages/homepage/Homepage';
import { navbarData } from './data/navbar';
import './App.scss';

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar {...navbarData} />
            <div className="body">
                <Homepage />
            </div>
        </div>
    );
};

export default App;
