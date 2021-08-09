import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import styles from './App.module.css';
import CovidImage from './assets/CovidImage.png';
import { fetchData, fetchCountriesData } from './api';


import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchMyAPI = async() => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      setIsLoading(false);
    }

    fetchMyAPI();
  },[]);

  const handleCountryChange = async(country) => {
    const fetchCountry = await fetchCountriesData(country);
    setData(fetchCountry);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img src={ CovidImage } className={styles.image} alt="Covid"/>
      <Cards data={ data } isLoading={ isLoading }/>
      <CountryPicker handleCountryChange={ handleCountryChange }/>
      <Chart data={ data } country={ country }/>
    </div>
  );
}

export default App;
