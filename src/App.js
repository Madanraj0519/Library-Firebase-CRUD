import React, { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./App.css"

function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  }

  return (
    <div>
      <AddBook id={bookId} setBookId={setBookId} />
      <BookList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
