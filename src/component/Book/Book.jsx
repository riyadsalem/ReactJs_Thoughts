import "./Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <h1 onClick={props.delete}>BookName: {props.BookName}</h1>
      <h2> Writer: {props.Writer}</h2>
      <label>
        <input type="text" onChange={props.inputName} value={props.BookName} />
      </label>
    </div>
  );
};

export default Book;
