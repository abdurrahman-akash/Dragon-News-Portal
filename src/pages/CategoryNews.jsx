import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams(); // data-type: string
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if ( id == "1") {
      const filterNews = data.filter((news) => news.others.is_today_pick == true);
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  console.log(id, data);
  return (
    <div>
      <h2>Total Found: {categoryNews.length}</h2>

      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  )
}

export default CategoryNews;
