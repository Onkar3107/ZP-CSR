import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (!value) {
      setResults([]);
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="relative flex items-center">
      <FaSearch className="text-md text-blue-100" />
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 px-4 py-2 border border-richblack-700 rounded-lg bg-richblack-800 text-richblack-100 focus:outline-none"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
