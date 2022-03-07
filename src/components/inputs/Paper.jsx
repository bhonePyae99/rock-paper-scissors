import paper from "../../images/icon-paper.svg";
const Paper = () => {
  return (
    <div className="w-[150px] cursor-pointer h-[150px] bg-blue-600 rounded-full flex items-center justify-center">
      <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
        <img src={paper} alt="" />
      </div>
    </div>
  );
};

export default Paper;
