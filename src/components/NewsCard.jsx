import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md mb-4 sm:mb-6 rounded-lg overflow-hidden">
      {/* Author + Share */}
      <div className="flex bg-base-200 justify-between items-center p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="avatar">
            <div className="w-8 sm:w-10 rounded-full">
              <img src={author.img} alt={author.name} className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xs sm:text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1 sm:gap-2 text-sm sm:text-base">
          <FaRegBookmark className="w-3 h-3 sm:w-4 sm:h-4"></FaRegBookmark>
          <FaShareAlt className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Title */}
      <div className="px-3 sm:px-4 py-3 sm:py-4">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary cursor-pointer hover:text-primary-focus transition-colors leading-tight">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-3 sm:px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-3 sm:px-4 text-accent text-sm sm:text-base leading-relaxed">
        {details.length > 150 ? (
          <>
            {details.slice(0, 150)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline ml-1"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-3 sm:px-4 py-3 border-t border-base-200 mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: Math.floor(rating.number) }).map((_, i) => (
            <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
          ))}
          <span className="ml-1 sm:ml-2 text-gray-600 text-xs sm:text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-xs sm:text-sm">
          <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
