import { NavLink } from "react-router-dom";



const Error = () => {
    
    return (
        <div className="text-7xl flex flex-col justify-center items-center">
            <h1 className="font-bold">Error👊</h1>
            <p><NavLink to={"category/01"} className="btn" >Back</NavLink></p>
            
        </div>
    );
};

export default Error;