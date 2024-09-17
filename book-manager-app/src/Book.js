import Menu from "./Menu";

const Book = ({ book, handleSelectBook }) => {
  return (
    <li className="text-start m-3">
      <div className="book">
        <div className="book-top d-flex align-items-end">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-modify">
            <Menu id={book.id} handleSelectBook={handleSelectBook} />
          </div>
        </div>
        <div className="book-title mt-2">{book.title}</div>
        {book.authors &&
          book.authors.map((author) => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;