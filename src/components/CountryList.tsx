import { useEffect, useState } from 'react';
import { Country } from '../types/Country';
import { getCountries } from '../api/countriesApi';
import CountryCard from './CountryCard';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (!selectedCountries.find((selectedCountry: Country) => selectedCountry.name.common === country.name.common)) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => selectedCountry.name.common !== country.name.common)
      );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1>Selected Countries</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {selectedCountries.map((country: Country) => (
          <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry} />
        ))}
      </div>
      <h1>Country List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {countries.map((country: Country) => (
          <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
