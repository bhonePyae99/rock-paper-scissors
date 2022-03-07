import bgTriangle from "../images/bg-triangle.svg";
import Paper from "./inputs/Paper";
import Rock from "./inputs/Rock";
import Scissors from "./inputs/Scissors";
const PlayInput = ({ setPlayer }) => {
  return (
    <div className="relative mt-28 w-[200px] h-[200px]">
      <img src={bgTriangle} className="w-full" alt="" />
      <div
        className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"
        onClick={() => {
          setPlayer({ name: "paper", value: 1 });
        }}
      >
        <Paper />
      </div>
      <div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
        onClick={() => {
          setPlayer({ name: "scissors", value: 2 });
        }}
      >
        <Scissors />
      </div>
      <div
        className="absolute bottom-0 left-1/2 translate-y-1/3 -translate-x-1/2"
        onClick={() => {
          setPlayer({ name: "rock", value: 0 });
        }}
      >
        <Rock />
      </div>
    </div>
  );
};

export default PlayInput;
