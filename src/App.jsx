import { useState, useEffect } from "react";
import "./App.css";
import ButtonToExercise from "./components/Button";

function App() {
  const [list, setList] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleAddItem = (e) => {
    e.preventDefault();

    if (valueInput.trim() !== "") {
      const item = {
        id: index + 1,
        name: valueInput,
      };
      setList([...list, item])
      setIndex(index + 1);
      setValueInput("");
      alert("data added suucces");
    } else {
      alert("harap isi data !!!");
    }
  };

  const handleDeleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList)
    console.log(list)
  }

  return (
    <>
      <div>
        <form onSubmit={handleAddItem}>
          <label htmlFor="">name : </label>
          <input
            type="text"
            className="border-solid border-2 p-1"
            value={valueInput}
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
          />
          <button type="submit" className="p-1 border-2 ml-1">
            add
          </button>
        </form>

        <div>
          <ul>
            {list.map((item) => (

              <li className="flex w-2/4 m-auto justify-center gap-3 mt-12" key={item.id}>
                <p>{item.name}</p>

                <button onClick={() => {handleDeleteItem(item.id )}} className="bg-red-500 text-white p-1">delete</button>

              </li>

            ))}
          </ul>
        </div>
      </div>
      <ButtonToExercise/>
    </>
  );
}

export default App;
