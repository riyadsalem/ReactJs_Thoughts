import "./BookList.css";
import { Component } from "react";
import { Book } from "../index";

export default class BookList extends Component {
  state = {
    books: [
      { BookName: "Think and Grow Rich", Writer: "George" },
      { BookName: "Rich Dad and poor Dad", Writer: "Dan Brown" },
      { BookName: "The Alchemist Riyad MS", Writer: "Paulo" },
    ],
  };

  changeBookState = () => {
    this.setState({
      books: [
        { BookName: "Think and Grow Rich NEW", Writer: "George NEW" },
        { BookName: "Rich Dad and poor Dad NEW", Writer: "Dan Brown NEW" },
        { BookName: "The Alchemist Riyad MS NEW", Writer: "Paulo NEW" },
      ],
    });
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
    return (
      <div className="App">
        <h1>Tihs is BookList </h1>
        <button onClick={this.changeBookState}>Change State</button>
        <input type="text" onChange={this.changeInput} />
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
      </div>
    );
  }
}
