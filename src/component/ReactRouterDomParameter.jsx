import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import ProductPage from './../pages/ProductPage';
import ProfilePage from './../pages/ProfilePage';
import NotFound from './../pages/NotFound';

const ReactRouterDomParameter = () => {
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product/:id/:name' element={<ProductPage/>} />
            <Route path='/profile/:facebookID/:YouTubeID' element={<ProfilePage/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </HashRouter>
      </div>
    );
};

export default ReactRouterDomParameter;