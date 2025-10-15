import React from 'react';
import ReactRouterDomLink from '../component/ReactRouterDomLink.jsx';
import ReactRouterDomNavLink from '../component/ReactRouterDomNavLink.jsx';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    let {facebookID,YouTubeID}=useParams()
    return (
        <div>
            <ReactRouterDomLink/>
            <ReactRouterDomNavLink/>

            <h1>facebookID:{facebookID}</h1>
            <h1>YouTubeID:{YouTubeID}</h1>

            <h1>This Is Profile Page</h1>            
            
        </div>
    );
};

export default ProfilePage;