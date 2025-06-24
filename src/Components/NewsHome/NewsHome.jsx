
import { useLoaderData } from "react-router-dom";


const NewsHome = () => {
    const name=useLoaderData();
    console.log(name)
    return (
        <div>
            <h2>hiiii</h2>
        </div>
    );
};

export default NewsHome;