import scissors from "../../images/icon-scissors.svg";
const Scissors = () => {
  return (
    <div className="w-[150px] cursor-pointer h-[150px] bg-yellow-600 rounded-full flex items-center justify-center">
      <div className="w-[110px] h-[110px] shading bg-white rounded-full flex items-center justify-center">
        <img src={scissors} alt="" />
      </div>
    </div>
  );
};

export default Scissors;
