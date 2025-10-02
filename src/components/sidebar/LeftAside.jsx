import { Suspense } from "react";
import Categories from "./Categories.jsx";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Categories />
      </Suspense>
    </div>
  )
}

export default LeftAside;