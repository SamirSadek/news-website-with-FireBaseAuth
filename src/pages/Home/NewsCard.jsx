import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {thumbnail_url, title, author, image_url, details, _id} = news;
    
    return (
        <div>
            <div className="flex gap-2 items-center bg-base-200 p-4 mb-2">
              <img className="w-10 h-10 rounded-full" src={thumbnail_url} alt="Rounded avatar"/>
              <div >
                <h2>{author.name}</h2>
                <p>2022-08-21</p>
              </div>

            </div>
            <div>
                <h2 className="text-xl font-bold mb-2 px-4">{title}</h2>
                <img className="px-4 mb-2" src={image_url} alt="" />
               {
                details.length > 200 ?  <p className="mb-4 px-4">{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-red-500"> Read More...</Link></p> : <p className="mb-4 px-4">{details}</p>
               }
            </div>

            
        </div>
    );
};

export default NewsCard;