import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className=" *:w-full ">
            <h2 className="font-semibold mb-4">Find Us on</h2>
            <button className="btn join-item"><FaFacebook /> Facebook</button>
            <button className="btn join-item"><FaTwitter />Twitter</button>
            <button className="btn join-item"><FaInstagram /> Instagram</button>
        </div>
    );
};

export default FindUs;