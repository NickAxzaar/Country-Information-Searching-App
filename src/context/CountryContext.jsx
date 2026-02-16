import { createContext, useContext, useReducer, useEffect } from 'react';
import { searchCountry } from '../utils/api';

// Context + useReducer
const CountryContext = createContext();

const initialState = {
  countries: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  currentCountry: null,
  loading: false,
  error: null,
};

function countryReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_START':
      return { ...state, loading: true, error: null };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        currentCountry: action.payload,
        loading: false,
        error: null,
      };
    case 'SEARCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_FAVORITE':
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return { ...state, favorites: newFavorites };
    case 'REMOVE_FAVORITE':
      const filteredFavorites = state.favorites.filter(f => f.name !== action.payload.name);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
}

export function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  useEffect(() => {
    // Load favorites from localStorage (useEffect demo)
    const saved = localStorage.getItem('favorites');
    if (saved) {
      dispatch({
        type: 'SET_FAVORITES',
        payload: JSON.parse(saved),
      });
    }
  }, []);

  const search = async (countryName) => {
    dispatch({ type: 'SEARCH_START' });
    try {
      const country = await searchCountry(countryName);
      dispatch({ type: 'SEARCH_SUCCESS', payload: country });
    } catch (error) {
      dispatch({ type: 'SEARCH_ERROR', payload: error.message });
    }
  };

  const addFavorite = (country) => {
    dispatch({ type: 'ADD_FAVORITE', payload: country });
  };

  const removeFavorite = (country) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: country });
  };

  return (
    <CountryContext.Provider value={{
      ...state,
      search,
      addFavorite,
      removeFavorite,
    }}>
      {children}
    </CountryContext.Provider>
  );
}

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider');
  }
  return context;
};
