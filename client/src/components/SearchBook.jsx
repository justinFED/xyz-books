import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBook({ onSearch }) {
  const [bookData, setBookData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidISBN = (isbn) => {
    const isbnDigitsOnly = isbn.replace(/-/g, "");
    if (isbnDigitsOnly.length === 10 || isbnDigitsOnly.length === 13) {
      if (isbnDigitsOnly.length === 10) {
        return /^[0-9]{9}[0-9X]$/i.test(isbnDigitsOnly);
      } else {
        return /^[0-9]+$/i.test(isbnDigitsOnly);
      }
    }
    return false;
  };

  const fetchBookData = async (isbn) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`http://127.0.0.1:3000/books/${isbn}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setBookData(data);
      onSearch(
        <div className="container mx-auto flex flex-col justify-center place-items-start ">
          <h1 className="text-3xl mb-4  w-full py-8 font-bold">Search Result</h1>
          <div className="w-full max-w-lg p-8 border rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
            <p>by {data.authors.split(", ").join(", ")}</p>
            <p>Edition: {data.edition}</p>
            <p>Price: PHP {data.price}</p>
            <p>ISBN: {data.isbn_13}</p>
            <p>Publication Year: {data.publication_year}</p>
            <p>Publisher: {data.publisher}</p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError("An error occurred while fetching book data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setError("");
      let isbn = searchInput.trim();
      if (!isValidISBN(isbn)) {
        setError("Invalid ISBN");
        return;
      }
      await fetchBookData(isbn);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError("An error occurred while fetching book data.");
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="py-8">
          <div className="flex justify-center">
            <input
              className="appearance-none bg-transparent border border-gray-300 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter ISBN"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
