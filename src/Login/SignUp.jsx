import { Link, useNavigate } from "react-router-dom";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthConText } from "../FireBase/Provider";
import { toast } from "react-toastify";



const SignUp = () => {
    const { createUser,userProfile } = useContext(AuthConText)
    const navigate = useNavigate()

    const [icon, showIcon] = useState();
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const trams = e.target.trams.checked;

        setError('')

        if (password.length < 6) {
            setError('please type 6 letter')
            return;
        };
        if (!trams) {
            setError("please accpt trams & condition")
            return;
        }

        console.log(name,photo,email, password, trams);

        createUser(email, password)
            .then((result) => {
                console.log(result.user)

                userProfile({displayName:name, photoURL:photo})
                .then(()=>{
                    // profile update
                })

                navigate("/category/01")
                toast('SignUp Successfully')
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    };

   
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                
                                <input type="text" className="input" placeholder="Name" name="name" />
                                
                                <input type="text" className="input" placeholder="Photo-URL" name="photo" />
                                
                                <input type="email" className="input" placeholder="Email" name="email" />
                                
                                <div className="relative">
                                    <input type={icon ? 'text' : 'password'} className="input" placeholder="Password" name="password" />
                                    <p onClick={() => showIcon(!icon)} className="absolute right-4 top-4">
                                        {
                                            icon ? <IoIosEye /> : <IoIosEyeOff />
                                        }
                                    </p>
                                </div>

                                <label className="label">
                                    <input type="checkbox" className="checkbox" name="trams" />
                                    I accpt trams & condition
                                </label>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>

                                <p>Don`t have an account, please <Link to="/login" className="underline">Login</Link></p>
                            </fieldset>
                        </form>
                        <div>
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;