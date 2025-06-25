import { FaEye, FaStar ,FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-md rounded-lg border p-4">
            {/* Author Info */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt="author"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{news.author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(news.author.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <button className="btn ">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-3">
                {news.title}
            </h2>

            {/* Thumbnail */}
            <img
                src={news.thumbnail_url}
                alt="news"
                className="w-full h-48 object-cover rounded-md mb-3"
            />

            {/* Details */}
            <p className="text-sm text-gray-600">
                {news.details.slice(0, 150)}...
                <span className="text-red-500 font-semibold cursor-pointer"> Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar />
                    <span className="font-medium">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
