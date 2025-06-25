import { NavLink, useNavigate } from "react-router-dom";
// import profile from '../assets/user.png'
import { useContext } from "react";
import { AuthConText } from "../FireBase/Provider";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthConText);
    const navigate=useNavigate()

    const handlSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Log Out Sucessfully')
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message)
            })

    }
    return (


        <div className="w-11/12 flex mx-auto py-4 items-center justify-between">
            <div></div>
            <div className="space-x-5">
                <NavLink to='/category/01'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
            </div>
            <div className="flex space-x-2">
                {/* <img src={profile} /> */}
                {
                    user ? <>
                        <p>{user.email}</p>
                        <p onClick={handlSignOut} className="btn">Log Out</p>
                    </> :
                        <p className="btn"><NavLink to='/login'>Login</NavLink></p>
                }

            </div>
        </div>
    );
};

export default Navbar;