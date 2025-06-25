
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";



const NewsHome = () => {
    const { data:news } = useLoaderData();
    console.log(news)

    return (
        <div>
            <h2 className="font-semibold">Dragon News Home</h2>
            <div className="p-4 gap-5 space-y-4 bg-gray-100">
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>

    );
};

export default NewsHome;