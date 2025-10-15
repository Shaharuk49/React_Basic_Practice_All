import { useState } from "react";

const ReactHookTODOUseState = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("")
    
    const AddToList =()=>{
        list.push(item);
        setList([...list]);
    }

    const RemoveItem = (index)=>{
        // alert(index);
        list.splice(index,1);
        setList([...list]);
    }


    return (
        <div>
            <h1>TODO List</h1><br />
            <p>Item:{item}</p>
            <p>list:{list.length}</p>
            <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder="Item" />
            <button onClick={AddToList}>Add</button>  

            <table>
                <tbody>
                    {list.length !==0?(list.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                            <td><button onClick={()=>{RemoveItem(index)}}>Remove</button></td>
                        </tr>
                    ))):( <tr><td colSpan="2">No data</td></tr>)}
                </tbody>
            </table>          
        </div>
    );
};

export default ReactHookTODOUseState;