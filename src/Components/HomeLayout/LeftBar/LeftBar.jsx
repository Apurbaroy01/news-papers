import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftBar = () => {
    
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(response => response.json())
            .then(data => setCategory(data.data.news_category))
    }, [])
    
    return (
        <div>
            <h2 className="font-semibold">All Category</h2>
            <div className="flex flex-col gap-2 mb-3">
                {
                    category.map(categoty => <NavLink to={`/category/${categoty.category_id}`}
                        className="btn bg-white"
                        key={categoty.category_id}>
                        {categoty.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftBar;