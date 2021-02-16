import "./App.css";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Basket from "./componants/Basket";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
