import "./styles.css";
import Register from "./components/register/Register";

export default function App() {
  return (
    <div className="App">
      <Register title={"Register"} subTitle={"New user"} appName={"Tescra"} />
    </div>
  );
}
