import axios from 'axios';

const API_BASE = 'https://restcountries.com/v3.1';

export async function searchCountry(countryName) {
  try {
    const params = {
      fields: 'name,capital,region,population,currencies,flags,area,languages,timezones'
    };
    
    const { data } = await axios.get(`${API_BASE}/name/${countryName}`, { params });
    
    if (!data || data.length === 0) {
      throw new Error(`Country "${countryName}" not found. Try "India", "USA", "Japan".`);
    }
    
    const country = data[0];
    
    const currencyInfo = country.currencies ? Object.values(country.currencies)[0] : null;
    
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
    
    const timezones = country.timezones ? country.timezones.join(', ') : 'N/A';
    
    return {
      name: country.name?.common || 'N/A',
      nativeName: country.name?.nativeName?.[Object.keys(country.name.nativeName)[0]]?.official || 'N/A',
      capital: country.capital?.[0] || 'N/A',
      region: country.region || 'N/A',
      subregion: country.subregion || 'N/A',
      population: country.population?.toLocaleString() || 'N/A',
      area: country.area?.toLocaleString() + ' km²' || 'N/A',
      currency: currencyInfo ? `${currencyInfo.name} (${Object.keys(country.currencies)[0]})` : 'N/A',
      languages,
      timezones,
      flag: country.flags?.png || '',
      flagAlt: country.flags?.alt || `Flag of ${country.name?.common}`,
    };
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`Country "${countryName}" not found. Try "India", "USA", "Japan".`);
    }
    throw new Error(error.message || 'Network error. Please try again.');
  }
}
