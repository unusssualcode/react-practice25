import "./App.css";
import Counter from "./Counter.jsx";
import HelloWorld from "./HelloWorld.jsx";
import Profile from "./Profile.jsx";

const user = {
  name: "Алексей",
  age: 30,
  city: "Казань",
};

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
