import { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("/Dragon-News-Portal/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg sm:text-xl mb-4">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent text-left justify-start text-xs sm:text-sm transition-all duration-200 ${
                isActive ? 'bg-primary text-white hover:bg-primary-focus' : ''
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
