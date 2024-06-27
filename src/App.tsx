import { getCountries } from './api/countriesApi';
import CountryList from './components/CountryList';

function App() {
  getCountries();

  return (
    <>
      <CountryList />
    </>
  );
}

export default App;
