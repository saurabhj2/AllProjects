import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [hdata, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-120 h-60 rounded-4xl bg-blue-300 relative">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className="w-10 h-10 absolute right-1 top-1 rounded-full"
          />
          <div className="flex justify-center items-center h-full w-full gap-6">
            <img src={data.avatar_url} className="rounded-full w-40 h-40" />
            <div>
              <h1 className="font-bold text-3xl text-white">Total Follower</h1>
              <h1 className="text-2xl font-normal text-white">
                {data.followers}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubUserInfo = () =>
  fetch("https://api.github.com/users/hiteshchoudhary").then((r) => r.json());
