import rock from "../../images/icon-rock.svg";
const Rock = () => {
  return (
    <div className="w-[150px] cursor-pointer h-[150px] bg-red-600 rounded-full flex items-center justify-center">
      <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
        <img src={rock} alt="" />
      </div>
    </div>
  );
};

export default Rock;
