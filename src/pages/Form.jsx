import { useState } from "react";
import ButtonToExercise from "../components/Button";

const FormPage = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="text-center m-4 text-4xl">form</h1>
      <div className="w-2/4 bg-slate-500 p-5 m-auto">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="text-white" htmlFor="username">username:</label>
          <input
            type="text"
            className="border border-5-black p-2"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label className="text-white" htmlFor="fullname">fullname:</label>
          <input
            type="text"
            className="border border-5-black p-2"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
          <label className="text-white" htmlFor="fullname">age:</label>
          <input
            type="number"
            className="border border-5-black p-2"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input type="submit" className="bg-slate-50 border border-5-black p-2" />
        </form>
      </div>

      {isSubmitted && ( // Tampilkan hanya jika isSubmitted bernilai true
        <div className="m-auto bg-slate-300 w-3/4 mt-5">
          <h1 className="font-bold text-2xl">
            Request sent to DB with the following request data:
          </h1>
          <ul className="text-2xl">
            <li>Username: {username}</li>
            <li>Fullname: {fullname}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      )}

      <ButtonToExercise/>
    </>
  );
};

export default FormPage;
