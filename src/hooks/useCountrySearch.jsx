import { useState, useCallback } from 'react';
import { useCountry } from '../context/CountryContext';

export function useCountrySearch() {
  const { search, currentCountry, loading, error } = useCountry();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      search(inputValue.trim());
    }
  }, [inputValue, search]);

  return {
    inputValue,
    setInputValue,
    handleSearch,
    currentCountry,
    loading,
    error,
  };
}
