import { useState, useEffect } from "react";
import ButtonToExercise from "../components/Button";

const TimerEnd = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  const addCount = () => {
    setCount(count + 1);
  };

  setTimeout(() => {
    setTimer(timer -1);
  }, 1000);

  const result = timer < 0;

  return (
    <div>
      <h1>none of click until timer expires</h1>
      <div className="text-center p-3 bg-red-300 w-1/4 m-auto">
        <h1 className="mb-8">{count}</h1>
        time left : {result ? "0" : <h1>{timer}</h1>}
        {result ? (
          ""
        ) : (
          <button onClick={addCount} className="p-2 bg-slate-500 text-white">
            +
          </button>
        )}
      </div>

      <ButtonToExercise/>
    </div>
  );
};

export default TimerEnd;
