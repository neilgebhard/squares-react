import "./App.css";
import Square from "./Square";

const N_SQUARES = 2000;

const squaresList = [];

for (let i = 0; i < N_SQUARES; i++) {
  squaresList.push(<Square />);
}

const App = () => {
  return <div className="container">{squaresList}</div>;
};

export default App;
