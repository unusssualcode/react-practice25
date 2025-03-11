function UserCard({
  name,
  age,
  city = "Не указан",
  avatar = "https://via.placeholder.com/150",
}) {
  return (
    <div className="user-card">
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
      <img src={avatar} alt="" />
    </div>
  );
}

export default UserCard;
