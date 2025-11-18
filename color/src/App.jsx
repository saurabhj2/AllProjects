import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-white");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
      <div
        className={`${color} h-screen flex flex-col justify-end items-center`}
      >
        <div className="mb-10 flex gap-15 list-none bg-blue-300 p-5 list rounded-full">
          <li 
            onClick={() => changeColor("bg-green-600")}
            className="bg-green-600 focus:ring-4"
          >
            GREEN
          </li>
          <li
            onClick={() => changeColor("bg-red-600")}
            className="bg-red-600"
          >
            RED
          </li>
          <li onClick={() => changeColor("bg-black")} className="bg-black">
            BLACK
          </li>
          <li
            onClick={() => changeColor("bg-blue-600")}
            className="bg-blue-600"
          >
            BLUE
          </li>
          <li
            onClick={() => changeColor("bg-pink-600")}
            className="bg-pink-600"
          >
            PINK
          </li>
          <li onClick={() => changeColor("bg-white")}>RESET</li>
        </div>
      </div>
    </>
  );
}

export default App;
