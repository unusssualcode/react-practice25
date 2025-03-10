import { useState } from "react";
import UserCard from "./UserCard.jsx";

function Profile({ user }) {
  const [age, setAge] = useState(user.age);
  return (
    <>
      <UserCard name={user.name} age={age} city={user.city} />
      <button onClick={() => setAge(age + 1)}>Age +</button>
    </>
  );
}

export default Profile;
