import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>{
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },(error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    }else{
      alert("Selaimesi ei tue  paikannusta")
    }
  }, [])
  
  return (
    <div>
      <p>Sijaintisi: {latitude}, {longitude}</p>
    </div>
  );
}

export default App;
