import Book from "./Book";
const BookShelf = ({ shelf, bookShelf, handleSelectBook }) => {
  return (
    <div className="m-3">
      <h2 className="border-bottom">{shelf}</h2>
      <div className="text-center">
        <ol className="d-flex justify-content-center flex-wrap books-shelf">
          {bookShelf.map((book) => (
            <Book key={book.id} book={book} handleSelectBook={handleSelectBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
