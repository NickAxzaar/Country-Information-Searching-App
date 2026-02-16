import { Link } from 'react-router-dom';
import { useCountry } from '../context/CountryContext';
import CountryCard from '../components/CountryCard';

function Favorites() {
  const { favorites, removeFavorite } = useCountry();

  return (
    <div>
      <Link to="/" className="back-btn">← Back to Home</Link>
      
      <h1>Favorite Countries</h1>
      
      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af', marginTop: '2rem' }}>
          No favorite countries yet. Search and add some from Home page!
        </p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((country, index) => (
            <div key={`${country.name}-${index}`} className="fav-card">
              <CountryCard country={country} />
              <button 
                onClick={() => removeFavorite(country)}
                style={{
                  marginTop: '1rem',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  cursor: 'pointer'
                }}
              >
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
