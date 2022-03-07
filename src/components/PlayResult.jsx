import Paper from "./inputs/Paper";
import Rock from "./inputs/Rock";
import Scissors from "./inputs/Scissors";

const PlayResult = ({ player, computer, result, restart }) => {
  let results = [
    { name: "rock", component: <Rock /> },
    { name: "paper", component: <Paper /> },
    { name: "scissors", component: <Scissors /> },
  ];
  let displayText = "";
  if (result === "win") {
    displayText = "you win";
  } else if (result === "lose") {
    displayText = "you lose";
  } else if (result === "draw") {
    displayText = "draw";
  } else {
    displayText = "";
  }
  return (
    <div className="grid uppercase gap-y-4 text-white justify-center grid-cols-2 md:grid-cols-4 md:w-3/4 w-full mt-10">
      <div className="text-center flex flex-col items-center col-span-1 md:order-1">
        <h2 className="font-bold mb-10 text-sm">You Picked</h2>
        {results.map((item) => item.name === player.name && item.component)}
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center md:order-2 order-last">
        <h2 className="font-bold text-white uppercase text-4xl">
          {displayText}
        </h2>
        {result !== "" && (
          <button
            className="text-red-400 px-10 rounded-lg mt-4 uppercase font-semibold py-2 bg-white"
            onClick={() => {
              restart();
            }}
          >
            play again
          </button>
        )}
      </div>
      <div className="text-center flex flex-col items-center col-span-1 md:order-3">
        <h2 className="font-bold mb-10 text-sm">the house picked</h2>
        {results.map((item) => item.name === computer.name && item.component)}
      </div>
    </div>
  );
};

export default PlayResult;
