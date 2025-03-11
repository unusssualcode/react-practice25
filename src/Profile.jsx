import { useState } from "react";
import UserCard from "./UserCard.jsx";

function Profile() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("Reni");
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setAge((prev) => prev + 1)}>Age+</button>
      <button onClick={() => setAge((prev) => Math.max(prev - 1, 0))}>
        Age-
      </button>
      <select
        value={city}
        name="city"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Reni">Reni</option>
        <option value="Izmail">Izmail</option>
        <option value="Odessa">Odessa</option>
      </select>

      <UserCard name={name} age={age} city={city} />
    </>
  );
}

export default Profile;
