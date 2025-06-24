import { NavLink } from "react-router-dom";
import profile from '../assets/user.png'


const Navbar = () => {
    return (
        <div className="w-11/12 flex mx-auto py-4 items-center justify-between">
            <div></div>
            <div className="space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
            </div>
            <div className="flex space-x-2">
                <img src={profile} />
                <button className="btn ">Login</button>
            </div>
        </div>
    );
};

export default Navbar;