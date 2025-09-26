import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import LatestNews from "../components/LatestNews.jsx";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
      </header>
        <main>
            <section className="left_nav"></section>
            <section className="main">
                <Outlet />
            </section>
            <section className="right_nav"></section>
        </main>
    </div>
  )
};

export default HomeLayout;
