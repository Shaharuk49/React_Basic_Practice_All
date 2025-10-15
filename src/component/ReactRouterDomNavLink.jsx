import React from 'react';
import { NavLink } from 'react-router-dom';

const ReactRouterDomNavLink = () => {
    return (
        <div>
            <div>
                <h1>Nav Link</h1>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to='/product/10/soap'>product</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to='/profile/afd/ka'>profile</NavLink></li>

            </ul>            
        </div>            
        </div>
    );
};

export default ReactRouterDomNavLink;