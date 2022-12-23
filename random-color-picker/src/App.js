import "./App.css";
import logo from "./logo.svg";
import useGenerateRandomColor from "./component/useGenerateRandomColor";

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "#" + color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <h2>Day Three: Random Colour Picker</h2>
        <button
          style={{
            padding: "40px 80px",
            borderRadius: "10px",
            backgroundImage: "#FFF",
            marginTop: "30px",
            fontSize: "34px",
            fontWeight: "700",
          }}
          onClick={generateColor}
        >
          {color ? "#" + color : "Click here"}
        </button>
      </header>
    </div>
  );
}

export default App;
