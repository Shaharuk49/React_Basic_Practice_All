import React from 'react';
import ReactRouterDomLink from './../component/ReactRouterDomLink.jsx';
import ReactRouterDomNavLink from '../component/ReactRouterDomNavLink.jsx';

const HomePage = () => {
    return (
        <div>
            <ReactRouterDomLink/>
            <ReactRouterDomNavLink/>
            <h1>This Is Home Page</h1>            
        </div>
    );
};

export default HomePage;