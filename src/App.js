import "./App.css";
import ContextAPI from "./component/Context.api";
import { BookList } from "./component";

function App() {
  return (
    <>
      <div className="App">
        {/* <BookList /> */}
        <ContextAPI />
      </div>
    </>
  );
}

export default App;
