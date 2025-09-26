import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 my-4">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE")}</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;