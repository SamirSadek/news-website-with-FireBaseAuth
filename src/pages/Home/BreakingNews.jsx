import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="mt-7 flex bg-[#F3F3F3] p-4">
      <button className="btn btn-secondary text-white">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
