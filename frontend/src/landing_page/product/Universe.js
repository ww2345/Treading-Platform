
function Universe() {
    return (
        <div className="container">
            <div className="row">
                <div className="text-center p-4 m-5">
                    <h1>The Zerodha Universe </h1>
                    <p>Extend your trading and investment experience even further with our partner platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="image/smallcaseLogo.png"/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div>
                <div className="col-4 p-3">
                    <img src="image/streakLogo.png" style={{width : "50%"}}/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div><div className="col-4 p-3">
                    <img src="image/sensibullLogo.svg" style={{width : "70%"}}/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div>
            </div>

             <div className="row">
                <div className="col-4 p-3 mt-4">
                    <img src="image/zerodhaFundhouse.png" style={{width : "70%"}}/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src="image/goldenpiLogo.png" style={{width : "60%"}}/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div><div className="col-4 p-3 mt-4">
                    <img src="image/dittoLogo.png" style={{width : "40%"}}/>
                    <p className="text-small text-muted ">smallcase test case </p>
                </div>
            <button  style={{ marginTop : '3rem' , marginBottom : '3rem' , backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px',marginLeft: 'auto', marginRight: 'auto',width: '200px'  }}>Sign Up Now</button>

            </div>
        </div>
    );
}

export default Universe;