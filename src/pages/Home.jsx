import { useCountry } from '../context/CountryContext';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function Home() {
  const { currentCountry, loading, error } = useCountry();

  return (
    <div>
      <h1>Country Information Finder</h1>
      
      <SearchBar />
      
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && currentCountry && <CountryCard country={currentCountry} />}
    </div>
  );
}

export default Home;
