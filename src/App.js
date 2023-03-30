import axios from 'axios';
import React from 'react'
import './App.css';
import './index.css'

function App() {
  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8c948bf9e705e82a267859921fb48df2`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(res => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
    
   
  
}

  return (

    <div className="app ">
      <div className='text-center p-4'>
        <input type='text' value={location}  placeholder="Enter your location" onKeyPress={searchLocation} name="location" onChange={event=>setLocation(event.target.value)} className='p-2 rounded-lg  text-black focus:outline-none'></input>
      </div>
      <div className='container mx-auto  relative p-4 flex justify-around flex-col h-full  '>
        <div className='relative flex  flex-col space-y-10'>
          <p className='text-4xl font-bold'>{ data.name}</p>
          {data.main ? <h1 className='font-bold text-6xl '>{data.main.temp.toFixed()}°F</h1> : null}
          {data.weather ? <p className='top-5 text-md text-2xl -rotate-90 absolute right-10'>{ data.weather[0].main}</p> :null}
          
        </div>


        {data.name !== undefined &&

          <div className='flex justify-around text-center rounded-lg bg-trans p-4'>
            <div>
              {data.main ? <p className='font-bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className=''>feels like</p>
            </div>

            <div>
              {data.main ? <p className='font-bold'>{data.main.humidity}%</p> : null}
              <p className=''>Humidity</p>
            </div>

            <div>
              {data.wind ? <p className='font-bold'>{data.wind.speed.toFixed()}MPH</p> : null}
              <p className=''>Windspeed</p>

            </div>
          </div>
        }


      </div>

      
      
    
     
    </div>
  );
}

export default App;
