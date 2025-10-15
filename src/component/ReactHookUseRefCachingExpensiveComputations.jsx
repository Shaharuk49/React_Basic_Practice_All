import { useRef } from "react";


const ReactHookUseRefCachingExpensiveComputations = () => {
    let APIData = useRef(null);
    let MyPTag = useRef();

    const fatchData =async ()=>{
         const response = await fetch("https://mern07ecommerce.azimemil.xyz/api/v1/ProductBrandList");
         APIData.current = await response.json();
    }
    const showData = ()=>{
        MyPTag.current.innerText = JSON.stringify(APIData.current);
           
    }
    return (
        <div>
            <p ref={MyPTag}></p>
            <button onClick={fatchData}>Call Api</button>            
            <button onClick={showData}>Show Data</button>         
        </div>
    );
};

export default ReactHookUseRefCachingExpensiveComputations;