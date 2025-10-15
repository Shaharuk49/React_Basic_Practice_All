import { useState } from "react";

const ReactHookUseState = () => {
    const [number,setNumber ] = useState(0);

    return (
        <div>
            <h1>Number:{number}</h1>
            <button onClick={()=>setNumber(number +1)}>Increment</button>
            <button onClick={()=>setNumber(0)}>Reset</button>    
        </div>
    );
};

export default ReactHookUseState;