// attrabute change useRef 

import { useRef } from "react";

const ReactHookUseRef1 = () => {
    let myImg = useRef();
    const change = () => {
        // myImg.current.src = "https://placehold.co/400x400";
        myImg.current.setAttribute('height', '200px');
        myImg.current.setAttribute('width', '300px');

    }
    return (
        <div>
            <img ref={myImg} src="https://placehold.co/600x400" alt="" />     
            <button onClick={change}>Click</button>       
        </div>
    );
};

export default ReactHookUseRef1;