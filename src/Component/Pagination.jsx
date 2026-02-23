import { useState } from "react";
import "./Pagination.css";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    img: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 5,
    title: "Ikigai",
    author: "Hector Garcia",
    img: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
  {
    id: 6,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    img: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
  },
  {
    id: 7,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    img: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
  },
  {
    id: 8,
    title: "Can't Hurt Me",
    author: "David Goggins",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
  },
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = books.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pagination-container">
      <div className="book-grid">
        {currentBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
