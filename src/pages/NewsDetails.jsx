import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import NewsDetailsCard from "../components/NewsDetailsCard.jsx";
import { useEffect } from "react";
import { useState } from "react";
import RightAside from "../components/RightAside.jsx";
import toast from 'react-hot-toast';

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const newsDetail = data.find((singleNews) => singleNews.id === id);
      if (newsDetail) {
        setNews(newsDetail);
      } else {
        toast.error('News article not found');
      }
    } catch (error) {
      toast.error('Failed to load news details');
      console.error('NewsDetails error:', error);
    } finally {
      setLoading(false);
    }
  }, [id, data]);
  if (loading) {
    return (
      <div>
        <header className="py-4">
          <Header />
        </header>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4 text-gray-600">Loading news details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!news || Object.keys(news).length === 0) {
    return (
      <div>
        <header className="py-4">
          <Header />
        </header>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <p className="text-gray-600 text-lg">News article not found</p>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-primary mt-4"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="py-4">
        <Header />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 w-11/12 max-w-7xl mx-auto my-3 px-2 sm:px-4">
        <section className="col-span-9">
          <h2 className="text-2xl font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-1 md:col-span-1 lg:col-span-3 order-3 md:order-3 sticky top-0 max-h-screen overflow-y-auto scrollbar-hide">
          <RightAside />
        </aside>
      </main>
    </div>
  )
}

export default NewsDetails;
