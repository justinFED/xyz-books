import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/Icon-feather-search.svg";
import SearchResult from "./SearchResult";

function SearchBook({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidISBN = (isbn) => {
    const isbnDigitsOnly = isbn.replace(/-/g, "");
    const isValidLength = isbnDigitsOnly.length === 10 || isbnDigitsOnly.length === 13;
    const isValidFormat = isbnDigitsOnly.length === 10 ? /^[0-9]{9}[0-9X]$/i.test(isbnDigitsOnly) : /^[0-9]+$/i.test(isbnDigitsOnly);
    return isValidLength && isValidFormat;
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
      onSearch(<SearchResult data={data} searchInput={searchInput} />);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError("Invalid ISBN");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchInput.trim() !== "") {
      handleSearch();
    } else {
      setError("");
      onSearch(null);
    }
  }, [searchInput]);

  const handleSearch = useCallback(async () => {
    try {
      setError("");
      const isbn = searchInput.trim();
      if (!isValidISBN(isbn)) {
        setError("Invalid ISBN");
        onSearch(null);
        return;
      }
      await fetchBookData(isbn);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError("An error occurred while fetching book data.");
    }
  }, [searchInput, onSearch, isValidISBN, fetchBookData]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="py-8 ">
          <div className="relative">
            <input
              className="appearance-none bg-transparent border border-[#6060f4] rounded-3xl w-64 py-2 px-4 pl-10 text-gray-700 leading-tight focus:outline-none z-10"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-5 h-5"
            />
          </div>

          <div className="items-center justify-center flex">
            {error && <p className="text-red-500 ">{error}</p>}
            {loading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
