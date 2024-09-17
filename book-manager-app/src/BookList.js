import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
const BookList = () => {
  const [bookshelf, setBookshelf] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await BooksAPI.getAll();
    makeBookShelfs(response);
  }

  const makeBookShelfs = (response) => {
    let bookshelf = {};
    response.forEach((element) => {
      let shelf = element.shelf;
      if (bookshelf[shelf]) {
        bookshelf[shelf].push(element);
      } else {
        bookshelf[shelf] = [element];
      }
    });
    setBookshelf(bookshelf);
  };

  const handleSelectBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      fetchData();
    });
  };

  return (
    <div>
      <div className="page-title">
        <h1>MyReads</h1>
      </div>
      <div className="pb-5">
        <div>
          {Object.keys(bookshelf).map((shelf) => (
            <BookShelf
              key={shelf}
              shelf={shelf}
              bookShelf={bookshelf[shelf]}
              handleSelectBook={handleSelectBook}
            />
          ))}
        </div>
      </div>
      <div className="add-book">
        <Link to="/search"></Link>
      </div>
    </div>
  );
};

export default BookList;