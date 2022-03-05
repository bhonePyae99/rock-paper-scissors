import PlayInput from "./components/PlayInput";
import ScoreDisplay from "./components/ScoreDisplay";

function App() {
  return (
    <div className="w-full bg-veryDarkGrayishCyan h-screen flex flex-col p-6 items-center">
      <ScoreDisplay />
      <PlayInput />

      <div className="w-full flex justify-center md:justify-end mr-4 mt-20 md:mt-5">
        <button className="py-2 uppercase text-white font-bold border-lightGrayishCyan border-2 rounded-lg px-10">
          Rules
        </button>
      </div>
    </div>
  );
}

export default App;
