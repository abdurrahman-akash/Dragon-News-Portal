import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center bg-base-200 p-2 sm:p-3 mb-4 gap-2 sm:gap-5 rounded-lg">
      <p className="text-white px-3 py-2 bg-secondary rounded text-sm sm:text-base whitespace-nowrap">Latest</p>

      <Marquee
        className="flex gap-5 w-full"
        speed={40}
        pauseOnHover={true}
        gradient={false}
        direction="left"
      >
        <p className="font-bold mr-6 sm:mr-10 text-sm sm:text-base">
          Match Highlights: Germany vs Spain — as it happened!
        </p>
        <p className="font-bold mr-6 sm:mr-10 text-sm sm:text-base">
          Transfer News: Star Player Joins New Club!
        </p>
        <p className="font-bold mr-6 sm:mr-10 text-sm sm:text-base">
          Injury Update: Key Player to Miss Season!
        </p>
        <p className="font-bold mr-6 sm:mr-10 text-sm sm:text-base">
          Championship Results: Local Team Wins Title!
        </p>
        <p className="font-bold mr-6 sm:mr-10 text-sm sm:text-base">
          Upcoming Fixtures: Don't Miss These Exciting Matches!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
