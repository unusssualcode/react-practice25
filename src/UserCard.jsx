function UserCard({ name, age, city = "Не указан", ageIncrease }) {
  return (
    <>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
      <button onClick={ageIncrease}>Age +</button>
    </>
  );
}

export default UserCard;
