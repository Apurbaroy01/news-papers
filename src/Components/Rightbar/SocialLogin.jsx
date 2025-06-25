import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthConText } from "../../FireBase/Provider";

const SocialLogin = () => {
    const {createusertGoogle}=useContext(AuthConText);
    const handleGoogleLogin=()=>{
        createusertGoogle()
        .then((result)=>{
            console.log(result)
        })
        .then((error)=>{
            console.log(error.message)
        })
    };
    return (

        <div className="space-y-4">
            <h2 className="font-semibold">Login With</h2>

            <div className="*:w-full space-y-2">
                <button onClick={handleGoogleLogin} className="btn join-item"><FaGoogle /> Login With Google</button>
                <button className="btn join-item"><FaGithub /> GitHub With Google</button>

            </div>


        </div>

    );
};

export default SocialLogin;






