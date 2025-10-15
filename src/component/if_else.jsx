
// const status = false;
// const if_else = () => {
//     if(status==true) {
//         return (
//             <div>
    
//                 <h1>Login Status</h1>
//                 <button>Logout</button>
//             </div>
//         )    
//     } else{
//         return (
//             <div>
//                 <h1>Login Status</h1>
//                 <button>Login</button>
//             </div>
//         )
//     }
// };

// export default if_else;


const LoginStatusBtn = (status)=>{
    if(status){
        return <button>Logout</button>
    }
    else{
        return <button>Login</button>
    }
}

const if_else = () => {
    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatusBtn(true)}
            
        </div>
    );
};

export default if_else;