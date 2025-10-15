import { useRef } from "react";

const ReactHookUseRefCssClass = () => {
    let myHeadLine = useRef();

    const change = () => {
        myHeadLine.current.classList.remove('text-success');
        myHeadLine.current.classList.add('text-danger');
    }

    return (
        <div>
            <h1 className="text-success" ref={myHeadLine}>This is Head Line!</h1>
            <button onClick={change}>Change</button>                        
        </div>
    );
};

export default ReactHookUseRefCssClass;