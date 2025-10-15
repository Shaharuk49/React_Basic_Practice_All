import React from 'react';
import { Link } from 'react-router-dom';

const ReactRouterDomLink = () => {
    return (
        <div>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>product</Link></li>
                <li><Link to='/profile'>profile</Link></li>

            </ul>            
        </div>            
        </div>
    );
};

export default ReactRouterDomLink;