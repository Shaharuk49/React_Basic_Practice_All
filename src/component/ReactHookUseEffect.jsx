import { useEffect } from "react";

const ReactHookUseEffect = () => {
    useEffect(() => {
        console.log('hello World');
    }, []);

    return (
        <div>           
        </div>
    );
};

export default ReactHookUseEffect;