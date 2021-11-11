import React from 'react';

import Navbar from './components/molecules/Navbar/Navbar';
import Homepage from './components/pages/homepage/Homepage';
import Footer from './components/molecules/Footer/Footer';
import { navbarData } from './data/navbar';
import { footerData } from './data/footer';
import './App.scss';

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar {...navbarData} />
            <div className="body">
                <Homepage />
            </div>
            <Footer {...footerData} />
        </div>
    );
};

export default App;
