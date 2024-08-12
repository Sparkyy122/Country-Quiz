import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {
  const [list, setList] = useState([]);  // State to store country data
  const [loading, setLoading] = useState(true);  // State to manage loading
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.slice(0, 10).map(country => ({
          name: country.name.common,
          region: country.region,
          population: country.population,
          flag: country.flags.svg,  // Use 'flags.svg' for the flag URL
        }));
        setList(countryList);
        setLoading(false);  // Set loading to false once data is ready
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display a loading message while fetching data
  }

  return (
    <div className="App">
      <Main country={list} />
    </div>
  );
}

export default App;
