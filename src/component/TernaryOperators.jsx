
const TernaryOperators = () => {
    let status = false;
    return (
        <div>
            {
                status ? <h1>True</h1> : <h1>False</h1>
            }
            {
                status ? <button>Log In </button> : <button>LogOut</button>
            }
        </div>

    );
};

export default TernaryOperators;