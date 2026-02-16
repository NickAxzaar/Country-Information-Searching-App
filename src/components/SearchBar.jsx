import { useCountrySearch } from '../hooks/useCountrySearch';

function SearchBar() {
  const { inputValue, setInputValue, handleSearch } = useCountrySearch();

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country (e.g. India, USA, Japan...)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-btn" disabled={!inputValue.trim()}>
           Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
