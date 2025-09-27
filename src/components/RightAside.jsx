import FindUsOn from "./FindUsOn.jsx";
import SocialLogin from "./SocialLogin.jsx";
import QZone from "./QZone.jsx";

const RightAside = () => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <SocialLogin />
        <FindUsOn />
        <QZone />
    </div>
  )
};

export default RightAside;
