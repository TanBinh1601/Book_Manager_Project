import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";
import Book from "./Book";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      if (search) {
        const response = await BooksAPI.search(search);
        if (response.error) {
          setBooks([]);
        } else {
          setBooks(
            response.filter(
              (book) => book.imageLinks && book.imageLinks.thumbnail
            )
          );
        }
      }
    };
    getBooks();
  }, [search]);

  const handleSearchBook = (e) => {
    const search = e.target.value;
    setSearch(search);
    if (search === "") {
      setBooks([]);
    }
  };

  async function handleSelectBook(book, shelf) {
    await BooksAPI.update(book, shelf);
  }

  return (
    <div>
      <div className="search-books-navbar">
        <Link to="/" className="close-search">
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={search}
            onChange={handleSearchBook}
          />
        </div>
      </div>
      <div className="pt-5 px-3 mt-5">
        <ol className="d-flex justify-content-center flex-wrap books-shelf">
          {books.map((book) => (
            <Book key={book.id} book={book} handleSelectBook={handleSelectBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;