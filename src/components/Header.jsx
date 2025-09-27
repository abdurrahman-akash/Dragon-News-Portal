import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 my-4 px-4">
      <img className="w-full max-w-[400px] h-auto sm:w-[300px] md:w-[350px] lg:w-[400px]" src={logo} alt="Dragon News Logo" />
      <p className="text-accent text-sm sm:text-base text-center">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent text-xs sm:text-sm md:text-base text-center">
        <span>{format(new Date(), "EEEE")}</span>,{" "}
        <span className="block sm:inline">{format(new Date(), "MMMM dd , yyyy")}</span>
      </p>
    </div>
  );
};

export default Header;
