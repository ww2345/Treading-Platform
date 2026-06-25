import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className='container'>
            <div className='row text-center mt-5 p-3 mb-5 border-bottom'>
                
                <h1>Technology</h1>
                <h3 className="mt-2 text-muted mb-3 fs-4">Sleek, modern solutions for your business</h3>
                <p className="mb-5">Check Out Over <Link style={{textDecoration:"none"}} to={"/"}>investment offerings</Link> </p>

            </div>
        </div>
    )
}

export default Hero; 