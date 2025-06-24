import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (

        <div className="space-y-4">
            <h2 className="font-semibold">Login With</h2>

            <div className="*:w-full space-y-2">
                <button className="btn join-item"><FaGoogle /> Login With Google</button>
                <button className="btn join-item"><FaGithub /> GitHub With Google</button>

            </div>


        </div>

    );
};

export default SocialLogin;






