import { Link,  useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthConText } from "../FireBase/Provider";
import { toast } from "react-toastify";


const Login = () => {
    const {signIn}=useContext(AuthConText);

    const [icon, showIcon] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signIn(email, password)
        .then((result)=>{
            console.log(result.user)
            toast('Login Successfully')
            navigate("/category/01")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    };
    

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={icon ? 'text' : 'password'} className="input" placeholder="Password" name="password" />
                                    <p onClick={() => showIcon(!icon)} className="absolute right-4 top-4">
                                        {
                                            icon ? <IoIosEye /> : <IoIosEyeOff />
                                        }
                                    </p>
                                </div>

                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Don`t have an account, please <Link to="/signup" className="underline">Sign up</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;