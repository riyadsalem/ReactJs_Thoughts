import "./BookList.css";
import { Component } from "react";
import { Book } from "../index";

export default class BookList extends Component {
  #state = {
    books: [
      { BookName: "Think and Grow Rich", Writer: "George" },
      { BookName: "Rich Dad and poor Dad", Writer: "Dan Brown" },
      { BookName: "The Alchemist Riyad MS", Writer: "Paulo" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Tihs is BookList </h1>
        <Book
          BookName={this.#state.books[0].BookName}
          Writer={this.#state.books[0].Writer}
        />
        <Book
          BookName={this.#state.books[1].BookName}
          Writer={this.#state.books[1].Writer}
        />
        <Book
          BookName={this.#state.books[2].BookName}
          Writer={this.#state.books[2].Writer}
        />
      </div>
    );
  }
}
