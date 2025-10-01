import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import toast from 'react-hot-toast';

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      if (id == "0") {
        setCategoryNews(data);
      } else if (id == "1") {
        const filterNews = data.filter((news) => news.others.is_today_pick == true);
        setCategoryNews(filterNews);
      } else {
        const filterNews = data.filter((news) => news.category_id == id);
        setCategoryNews(filterNews);
      }
      toast.success(`Found ${categoryNews.length || data.length} news articles`);
    } catch (error) {
      toast.error('Failed to load news articles');
      console.error('CategoryNews error:', error);
    } finally {
      setLoading(false);
    }
  }, [data, id, categoryNews.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="mt-4 text-gray-600">Loading news articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Total Found: {categoryNews.length}
      </h2>

      <div className="space-y-4">
        {categoryNews.length > 0 ? (
          categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No news articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryNews;
