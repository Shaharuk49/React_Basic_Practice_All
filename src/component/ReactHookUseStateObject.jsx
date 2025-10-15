import { useState } from "react";

const ReactHookUseStateObject = () => {
    const [myObj,setMyObj] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3"
    });
    /*
    //Full object will be replaced by new object
    const change =()=>{
        setMyObj({
            key1: "value4",
            key2: "value5",
            key3: "value6"
        });
    }
    */
    /*
    //Only key1 will be replaced by new value
    const change =()=>{
        setMyObj({
            ...myObj,
            key1: "value4"
        });
    }
    */
   const change =()=>{
    setMyObj(
        prevOBJ=>({
            ...prevOBJ,
            key1: "key 1 change value : value4"
        })
    )
   }

    return (
        <div>
            <h1>{myObj.key1}</h1>
            <h1>{myObj.key2}</h1>
            <h1>{myObj.key3}</h1>


            <button onClick={change}>Change</button>
        </div>
    );
};

export default ReactHookUseStateObject;