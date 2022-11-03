import "./BookList.css";
import { Component } from "react";
import { Book } from "../index";

export default class BookList extends Component {
  /*
  #styleH1 = {
    color: "red",
  };
  */

  state = {
    books: [
      { id: "1", BookName: "Think and Grow Rich", Writer: "George" },
      { id: "2", BookName: "Rich Dad and poor Dad", Writer: "Dan Brown" },
      { id: "3", BookName: "The Alchemist Riyad MS", Writer: "Paulo" },
    ],
  };

  /*
  changeBookState = () => {
    this.setState({
      books: [
        { BookName: "Think and Grow Rich NEW", Writer: "George NEW" },
        { BookName: "Rich Dad and poor Dad NEW", Writer: "Dan Brown NEW" },
        { BookName: "The Alchemist Riyad MS NEW", Writer: "Paulo NEW" },
      ],
    });
  };
  */

  deleteBookState = (index) => {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({ books: books });
  };

  changeInput = (event) => {
    this.setState({
      books: [
        { BookName: event.target.value, Writer: "George NEW" },
        { BookName: "Rich Dad and poor Dad NEW", Writer: "Dan Brown NEW" },
        { BookName: "The Alchemist Riyad MS NEW", Writer: "Paulo NEW" },
      ],
    });
  };

  render() {
    const styleH1 = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "Red",
      color: "white",
      padding: "10px",
    };

    const booksState = this.state.books;
    const books = booksState.map((book, index) => {
      return (
        <Book
          key={book.id}
          BookName={book.BookName}
          Writer={book.Writer}
          delete={() => this.deleteBookState(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1 style={styleH1}>Tihs is BookList </h1>
        <label>
          <button onClick={this.changeBookState} style={{ color: "red" }}>
            Change State
          </button>
          <input type="text" onChange={this.changeInput} />
        </label>

        {books}

        {/** 
        <Book
          BookName={this.state.books[0].BookName}
          Writer={this.state.books[0].Writer}
        />
        <Book
          BookName={this.state.books[1].BookName}
          Writer={this.state.books[1].Writer}
        />
        <Book
          BookName={this.state.books[2].BookName}
          Writer={this.state.books[2].Writer}
          change={this.changeBookState}
        />
        */}
      </div>
    );
  }
}
