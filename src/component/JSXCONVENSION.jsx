import { Fragment } from "react";
let marks = 80;
const JSXCONVENSION = () => {
    return (
        <Fragment>
            <h1>Hello 1</h1>  
            <h1>{new Date().getMinutes()} </h1>          
            {marks >= 80?<h1>Pass</h1>:<h1>Fail</h1>}

            {(()=>{
                let result = marks >= 80?"Pass":"Fail";
                return <h1>{result}</h1>;
            })()}
        </Fragment>
    );
};

export default JSXCONVENSION;