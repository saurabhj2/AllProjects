import { useCallback, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [length, setLength] = useState(8);
  const [allowdNumber, setNumber] = useState(false);
  const [allowdChar, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowdNumber) str += "0123456789";
    if (allowdChar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowdNumber, allowdChar, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowdNumber, allowdChar]);

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-neutral-800">
        <div className="mt-20 h-fit px-20 py-10 bg-neutral-600 rounded-2xl">
          <div className="flex">
            <input
              type="text"
              value={password}
              className="w-xl border-none border-r-0 py-2 bg-white rounded-l-2xl focus:outline-none pl-2 text-amber-700 text-lg font-medium"
              ref={passwordRef}
              readOnly
            />
            <button
              className="bg-blue-500 py-2 px-4 text-white rounded-r-2xl font-medium cursor-pointer border border-blue-500 hover:bg-blue-800"
              onClick={async () => {
                passwordRef.current.select();
                navigator.clipboard.writeText(password);
                toast.remove();
                toast.success("copied", {
                  position: "bottom-center",
                });
                
              }}
            >
              Copy
            </button>
            <Toaster />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="w-25 text-lg font-medium text-amber-700">
              Length({length})
            </span>
            <input
              type="checkbox"
              className="-mr-2"
              onChange={() => {
                setNumber((prev) => {
                  return !prev;
                });
              }}
            />
            <span className="font-medium text-lg text-amber-700">Numbers</span>

            <input
              type="checkbox"
              className="-mr-2"
              onChange={()=>setChar((prev) => !prev)}
            />
            <span className="font-medium text-lg text-amber-700">
              Characters
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
