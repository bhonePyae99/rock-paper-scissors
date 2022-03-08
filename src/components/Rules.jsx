import rules from "../images/image-rules.svg";
import close from "../images/icon-close.svg";
const Rules = ({ setShowRules }) => {
  return (
    <div className="fixed w-full h-full bg-[rgba(0,0,0,0.8)] left-0 top-0 z-10 flex items-center justify-center">
      <div className="bg-white rounded-lg p-5 opacity-100 w-96 md:flex hidden flex-col">
        <div className="flex font-extrabold text-2xl items-center uppercase justify-between mb-4">
          <h2>rules</h2>
          <img
            src={close}
            className="cursor-pointer"
            alt=""
            onClick={() => {
              setShowRules(false);
            }}
          />
        </div>
        <img src={rules} alt="" />
      </div>
      <div className="w-full font-extrabold text-2xl uppercase h-full items-center bg-white flex flex-col justify-around md:hidden">
        <h2>rules</h2>
        <img src={rules} alt="" />
        <img
          src={close}
          className="cursor-pointer"
          alt=""
          onClick={() => {
            setShowRules(false);
          }}
        />
      </div>
    </div>
  );
};

export default Rules;
