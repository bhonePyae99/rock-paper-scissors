import bgTriangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
const PlayInput = () => {
  return (
    <div className="relative mt-28 w-[200px] h-[200px]">
      <img src={bgTriangle} className="w-full" alt="" />
      <div className="w-[150px] cursor-pointer h-[150px] bg-blue-600 rounded-full flex items-center justify-center absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
        <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
          <img src={paper} alt="" />
        </div>
      </div>
      <div className="w-[150px] cursor-pointer h-[150px] bg-yellow-600 rounded-full flex items-center justify-center absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
          <img src={scissors} alt="" />
        </div>
      </div>
      <div className="w-[150px] cursor-pointer h-[150px] bg-red-600 rounded-full flex items-center justify-center absolute bottom-0 left-1/2 translate-y-1/3 -translate-x-1/2">
        <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
          <img src={rock} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlayInput;
