import { useEffect, useState } from "react";


function ReactHookUseEffectMethodFetch() {
        const [Data,SetData]=useState([])

        useEffect(()=>{
            fetch('https://mern07ecommerce.azimemil.xyz/api/v1/ProductBrandList')
           .then(response => response.json())
           .then(data => SetData(data))
        },[])



    return (
        <div>
            <p>this is ReactHookUseEffectMethodFetch</p> 
            {JSON.stringify(Data)}           
        </div>
    );
}

export default ReactHookUseEffectMethodFetch;