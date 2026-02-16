import { useCountry } from '../context/CountryContext';

function CountryCard({ country }) {
  const { addFavorite } = useCountry();

  if (!country) return null;

  const handleFavorite = () => {
    addFavorite(country);
  };

  return (
    <div className="country-card">
      <div className="flag-section">
        <img
          src={country.flag}
          alt={country.flagAlt}
          className="country-flag"
          loading="lazy"
        />
        <div>
          <h1 className="country-name">{country.name}</h1>
          <p className="native-name">{country.nativeName}</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-label">Capital</div>
          <div className="detail-value">{country.capital}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Region</div>
          <div className="detail-value">{country.region}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Subregion</div>
          <div className="detail-value">{country.subregion}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Population</div>
          <div className="detail-value">{country.population}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Area</div>
          <div className="detail-value">{country.area}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Currency</div>
          <div className="detail-value">{country.currency}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Languages</div>
          <div className="detail-value">{country.languages}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Timezones</div>
          <div className="detail-value">{country.timezones}</div>
        </div>
      </div>

      <button 
        onClick={handleFavorite}
        className="search-btn"
        style={{ marginTop: '1.5rem', padding: '0.75rem 2rem' }}>
        Add to Favorites
      </button>
    </div>
  );
}

export default CountryCard;
