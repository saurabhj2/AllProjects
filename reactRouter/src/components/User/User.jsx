import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
//   console.log(userId)
  return <h1>Hello user{userId}</h1>;
}

export default User;
