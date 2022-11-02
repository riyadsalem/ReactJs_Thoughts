import "./Book.css";

const Book = (props) => {
  return (
    <div className="App">
      <h1 onClick={props.change}>BookName: {props.BookName}</h1>
      <h2> Writer: {props.Writer}</h2>
    </div>
  );
};

export default Book;
