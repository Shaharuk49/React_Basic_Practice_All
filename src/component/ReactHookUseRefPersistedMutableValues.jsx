import { useRef } from "react";

const ReactHookUseRefPersistedMutableValues = () => {
    let number = useRef(0);
    const change = () => {
        number.current++;
        console.log(number.current);
        // document.write(number.current);
    }
    return (
        <div>
            <button onClick={change}>Click</button>            
        </div>
    );
};

export default ReactHookUseRefPersistedMutableValues;