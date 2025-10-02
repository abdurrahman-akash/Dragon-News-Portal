import { Outlet } from "react-router-dom";
import { 
  Header, 
  LatestNews, 
  Navbar, 
  LeftAside, 
  RightAside 
} from "../components";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Header />
        <section className="w-11/12 max-w-7xl mx-auto my-3 px-2 sm:px-4">
          <LatestNews />
        </section>
        <nav className="w-11/12 max-w-7xl mx-auto my-3 px-2 sm:px-4">
          <Navbar />
        </nav>
      </header>
        <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 w-11/12 max-w-7xl mx-auto my-3 px-2 sm:px-4">
            {/* Left Aside - Hidden on mobile, full width on tablet, 3 cols on desktop */}
            <aside className="hidden md:block md:col-span-1 lg:col-span-3 order-1 md:order-1 sticky top-0 h-fit">
              <LeftAside />
            </aside>
            
            {/* Main Content - Full width on mobile, 2 cols on tablet, 6 cols on desktop */}
            <section className="col-span-1 md:col-span-2 lg:col-span-6 order-2 md:order-2">
                <Outlet />
            </section>
            
            {/* Right Aside - Full width on mobile, 1 col on tablet, 3 cols on desktop */}
            <aside className="col-span-1 md:col-span-1 lg:col-span-3 order-3 md:order-3 sticky top-0 max-h-screen overflow-y-auto scrollbar-hide">
              <RightAside />
            </aside>
        </main>
    </div>
  )
};

export default HomeLayout;
