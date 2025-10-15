

const Switch = () => {
    const status = null;
    switch (status) {
        case true:
            return (
                <div>
                    <h1>Login Status</h1>
                    <button>Logout</button>
                </div>
            );
        case false:
            return (
                <div>
                    <h1>Login Status</h1>
                    <button>Login</button>
                </div>
            );
        default:
            return (
                <div>
                    <h1>Login Status</h1>
                    <button>Login</button>
                </div>
            );
    }
};

export default Switch;