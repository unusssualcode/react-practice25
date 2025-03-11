import { useState } from "react";
import UserCard from "./UserCard.jsx";

function UserForm() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("Reni");

  const handleReset = () => {
    setAge(18);
    setName("");
    setCity("Не указан");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select
        value={city}
        name="city"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Не указан">Не указан</option>
        <option value="Reni">Reni</option>
        <option value="Izmail">Izmail</option>
        <option value="Odessa">Odessa</option>
      </select>
      <button onClick={handleReset}>Reset Form</button>

      <UserCard name={name} age={age} city={city} />
    </>
  );
}

export default UserForm;
