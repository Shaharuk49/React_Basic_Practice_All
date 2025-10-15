import React from 'react';
import ReactRouterDomLink from '../component/ReactRouterDomLink.jsx';
import ReactRouterDomNavLink from '../component/ReactRouterDomNavLink.jsx';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    let {id,name} = useParams();
    return (
        <div>
            <ReactRouterDomLink/>
            <ReactRouterDomNavLink/>

            <h1>Product ID: {id}</h1>
            <h1>Name:{name}</h1>

            <h1>This Is Product Page</h1>            
        </div>
    );
};

export default ProductPage;