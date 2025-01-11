import { useState } from "react";
import "../App.css";
import ButtonToExercise from "../components/Button";

const ThemePage = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (value) => {
    value == "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <div className="theme-div" style={{background : theme === "light" ? "#fff": "#333",color: theme === "light" ? "#000" : "#fff" }}>
      <h1 className="text-3xl">Current theme : <span className="font-bold">{theme}</span></h1>
      <div className="flex gap-3 mt-4 flex-col">
        <button className="border-5 p-3 bg-black text-white" onClick={() => handleTheme("dark")}>ligth</button>
        <button className="border-5 p-3 bg-black text-white" onClick={() => handleTheme("light")}>Dark</button>
        <div className="w-2/4 m-auto">
            <h1 className="text-center font-bold text-4xl">CeritaKu</h1>
            <p className="text-justify mt-7">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sequi, amet et sapiente vitae possimus, quia dicta repellat ut dolores autem explicabo libero repudiandae corrupti dolor. Amet ratione dolores eum.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere repellendus omnis eaque non iure nostrum eum reprehenderit! Earum odit quo impedit ipsa cum? Ducimus consequatur suscipit aspernatur ad! Laboriosam, illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex atque aspernatur vero impedit at debitis optio nulla quasi, minima velit repellendus blanditiis sequi voluptatum autem adipisci veritatis reprehenderit fugiat eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quidem magni inventore omnis perspiciatis quae repellat veritatis, ut obcaecati. Provident odio ex, placeat libero eos praesentium ad tempore nam reiciendis!</p>
        </div>

        <ButtonToExercise/>
      </div>

    </div>
  );
};

export default ThemePage;
