import { Link } from "react-router-dom";

const ButtonToExercise = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-semibold mt-5">pindah tempat ke excerse lain !!</h1>
    <div className="garapan flex align-center justify-center mt-3 text-white gap-4">
      
      <Link to="/useEffect">
        <button className="bg-slate-500">useEffect</button>
      </Link>
      <Link to="/tambah-data">
        <button className="bg-slate-500">create delete </button>
      </Link>
      <Link to = '/timer-end'>
        <button className="bg-slate-500">timerEnd</button>
      </Link>
      <Link to = '/form'>
        <button className="bg-slate-500">form</button>
      </Link>
      <Link to = '/theme-page'>
        <button className="bg-slate-500">themePage</button>
      </Link>
      <Link to = '/'>
        <button className="bg-blue-500">home</button>
      </Link>
    </div>
    </>
  );
};

export default ButtonToExercise
