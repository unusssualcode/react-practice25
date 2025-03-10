function UserCard({ name, age, city = "Не указан" }) {
  return (
    <>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </>
  );
}

export default UserCard;
