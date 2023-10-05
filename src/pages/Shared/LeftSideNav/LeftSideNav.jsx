import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] =useState([])

    useEffect(()=>{

        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[])
    return (
        <div className="p-4">
          <h2 className="text-xl font-semibold">All Category</h2>
          <div className="ml-4 mt-4">
          {
            categories.map(category=> <Link className="block mt-8 text-[#9F9F9F] text-xl font-medium "  to={`/category/${category.id}`} key={category.id}><p className="">{category.name}</p></Link>)
          }
          </div>
        </div>
    );
};

export default LeftSideNav;