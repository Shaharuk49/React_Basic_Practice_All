///innner text and inner html can be changed using useRef

import { useRef } from "react";


const reactHookUseRef = () => {
    let myHeadLine = useRef();

    const change = () => {
        // myHeadLine.current.innerText = "Hello useRef";
        // myHeadLine.current.innerHTML = "<ul><li>A</li><li>B</li></ul>"
        myHeadLine.innerHTML = "<ul><li>A</li><li>B</li></ul>"
    }
    return (
        <div>
            {/* <h1 ref= {myHeadLine}></h1>   */}
            <h1 ref= {(h1)=>myHeadLine=h1}></h1>
            <button onClick={change}>Click</button>          
        </div>
    );
};

export default reactHookUseRef;