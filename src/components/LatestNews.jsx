import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-2 mb-4 gap-5">
      <p className="text-white px-3 py-2 bg-[#D72050]">Latest News</p>

      <Marquee
        className="flex gap-5"
        speed={50}
        pauseOnHover={true}
        gradient={false}
      >
        <p className="font-bold mr-10">
          Match Highlights: Germany vs Spain — as it happened!
        </p>
        <p className="font-bold mr-10">
          Transfer News: Star Player Joins New Club!
        </p>
        <p className="font-bold mr-10">
          Injury Update: Key Player to Miss Season!
        </p>
        <p className="font-bold mr-10">
          Championship Results: Local Team Wins Title!
        </p>
        <p className="font-bold mr-10">
          Upcoming Fixtures: Don't Miss These Exciting Matches!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
