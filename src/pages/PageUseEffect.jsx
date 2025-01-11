import { useState, useEffect } from "react";
import ButtonToExercise from "../components/Button";

const PageUseEffect = () => {
  const [count, setCount] = useState(0);
  const [click , setClick] = useState(0)

  
  const handleClick = (e) => {
    e.preventDefault()
    setClick(click +1)
  };

  useEffect(() => {
    setCount(count+1)
    console.log(count)
  }, [click]);

  return (
    <div>
      <h1>page direndenrer {count} kaali</h1>
      <button className="border-2 px-5 py-1"
        onClick={
          handleClick
        }
      >add</button>

      <h1>button clik berapa {click} kali</h1>
      <ButtonToExercise/>
    </div>
  );
};

export default PageUseEffect;
