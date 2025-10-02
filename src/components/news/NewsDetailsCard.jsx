import { Link } from "react-router-dom"

const NewsDetailsCard = ({ news }) => {
    const { title, details, image_url } = news;
  return (
    <div>
      <div className="space-y-4 my-8">
        <img src={image_url} alt={title} className="w-full h-[350px] object-cover" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{details}</p>
        <Link to="/" className="btn btn-secondary">
        {" "}
        Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NewsDetailsCard
