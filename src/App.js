import "./App.css";
import { Book } from "./component/index";

function App() {
  return (
    <>
      <div className="App">
        <Book BookName="Think and Grow Rich" Writer="George" />
        <Book BookName="Rich Dad and poor Dad" Writer="Dan Brown" />
        <Book BookName="The Alchemist" Writer="Paulo" />
      </div>
    </>
  );
}

export default App;
