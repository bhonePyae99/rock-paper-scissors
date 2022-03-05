import logo from "../images/logo.svg";
const ScoreDisplay = () => {
  return (
    <div className="md:w-1/2 w-full mt-10 text-black p-4 rounded-md items-center flex justify-between border-2 mx-auto">
      <img src={logo} className="md:h-[100px] h-16" alt="" />
      <div className="md:h-[100px] flex flex-col justify-between items-center md:py-4 md:px-10 p-3 bg-white rounded-lg">
        <h4 className="text-primary uppercase font-bold">Score</h4>
        <h2 className="text-5xl font-extrabold text-darkGrayishCyan">12</h2>
      </div>
    </div>
  );
};

export default ScoreDisplay;
