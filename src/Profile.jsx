import { useState } from "react";
import UserCard from "./UserCard.jsx";

function Profile({ user }) {
  const [age, setAge] = useState(user.age);
  return (
    <>
      <UserCard
        name={user.name}
        age={age}
        city={user.city}
        ageIncrease={() => setAge((prev) => prev + 1)}
      />
    </>
  );
}

export default Profile;
