import React, {useEffect, useState} from 'react';
import axios from "axios";


const ReactHookUseEffectAXiousMethodAxious = () => {
    const [data, setData] = useState(null)


    /*
    useEffect(() => {

        (async ()=>{
           await callBlogPost()
        })()

    }, []);

     */



    const callBlogPost = async () => {
        let URL="https://basic-blog.teamrabbil.com/api/post-list/3";
        let res=await axios.get(URL)
        let JSONDATA=res.data;
        setData(JSONDATA)
    }




    return (
        <div className="container">
            <div className="row">
                <h1>API CALLING</h1>
                <button onClick={callBlogPost}>Call Datta</button>
                {
                    data!=null?(
                        data.map((item)=>{
                           return (
                               <div className="col-3 p-2">
                                   <div className="card">
                                       <img className="card-img-top" src={item['img']}/>
                                       <div className="card-body">
                                           <h6>{item['title']}</h6>
                                           <p>{item['short']}</p>
                                       </div>
                                   </div>
                               </div>
                           )
                        })
                    ) : (<span className="spinner-border text-primary">

                    </span>)
                }
            </div>
        </div>
    );
};

export default ReactHookUseEffectAXiousMethodAxious;