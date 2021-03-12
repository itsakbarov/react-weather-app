import './scss/main.scss';
import Header from './components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero/Hero';

function App() {

  const [location, setLocation] = useState('Tashkent')
  const [info, setInfo] = useState({
    isFetched: false,
    error: null,
    data: []
  })

  

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.length !== 0 ? (location) : ('none') }&appid=ccacb170bc1820d53728df08013f9ec3`)
      .then(function (response) {
        setInfo({
          isFetched: true,
          error: null,
          data: response.data
        })
      })
      .catch(function (error) {
        setInfo({
          isFetched: true,
          error: error,
          data: []
        })
      })
    }, [location])

  return (
    <div className="App">
      <Header setLocation={setLocation} />
      <Hero info={info}/>
    </div>
  );
}

export default App;
