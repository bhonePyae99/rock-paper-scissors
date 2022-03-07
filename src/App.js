import PlayInput from "./components/PlayInput";
import ScoreDisplay from "./components/ScoreDisplay";
import PlayResult from "./components/PlayResult";
import PlayerContext from "./contexts/PlayerContext";
import { useState, useEffect } from "react";
import _ from "lodash";
function App() {
  const [player, setPlayer] = useState({});
  const [computer, setComputer] = useState({});
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (result === "win") {
      setScore((score) => score + 1);
    } else if (result === "lose") {
      setScore((score) => {
        if (score !== 0) {
          return score - 1;
        } else {
          return 0;
        }
      });
    } else {
      setScore((score) => score);
    }
  }, [result]);

  useEffect(() => {
    if (Object.keys(player).length === 0) return;
    const picks = [
      { name: "rock", value: 0 },
      { name: "paper", value: 1 },
      { name: "scissors", value: 2 },
    ];
    setTimeout(() => {
      const computerPick = _.sample(picks);
      setComputer(computerPick);
      if ((player.value + 1) % 3 === computerPick.value) {
        setResult("lose");
      } else if (player.value === computerPick.value) {
        setResult("draw");
      } else {
        setResult("win");
      }
    }, 2000);
  }, [player]);

  const restart = () => {
    setPlayer({});
    setComputer({});
    setResult("");
  };

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <div className="w-full bg-veryDarkGrayishCyan h-screen flex flex-col p-6 items-center relative">
        <ScoreDisplay score={score} />
        {Object.keys(player).length === 0 && (
          <PlayInput setPlayer={setPlayer} />
        )}
        {Object.keys(player).length !== 0 && (
          <PlayResult
            player={player}
            computer={computer}
            result={result}
            restart={restart}
          />
        )}
        <div>
          <button className="py-2 absolute bottom-2 md:right-2 right-1/2 translate-x-1/2 md:translate-x-0 uppercase text-white font-bold border-lightGrayishCyan border-2 rounded-lg px-10">
            Rules
          </button>
        </div>
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
