import React, { useEffect, useState } from 'react';

const ReactHookUseEffectAsyncAwaitMethodFetch = () => {
    const [Data,SetData]= useState([])

    useEffect(()=>{
        (
            async ()=>{
                let response = await fetch('https://mern07ecommerce.azimemil.xyz/api/v1/ProductBrandList')
                let result = await response.json();
                SetData(result);
            }
        )()
    },[])


    return (
        <div>
            <p>ReactHookUseEffectAsyncAwaitMethodFetch</p>     
            {JSON.stringify(Data)}                 
        </div>
    );
};

export default ReactHookUseEffectAsyncAwaitMethodFetch;