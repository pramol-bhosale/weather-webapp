import React,{useState} from 'react'
import Axios from 'axios'

function ShowData(){
const [show, setShow]=useState(false)
const[location, setLocation]=useState()
const[data, setData]=useState({})
const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=<your api goes here>`;


const fetchData=(event)=>{
   
if(event.key === 'Enter'){
Axios.get(url).then((response)=>{
    setShow(false);
    setData(response.data)
    setLocation('')
}).catch((e) => { setShow(true)});

}
}

return(
<div className='container-fluid content vh-100'>
{ !show &&    <div className='row p-5' >
    <div className='offset-md-3 col-12 col-md-5   text-center'>
      <input value={location} type="text" className='form-control  d-inline rounded-5' placeholder='Enter Location ......' onChange={(e)=> setLocation(e.target.value)} onKeyPress={(e)=>{fetchData(e)}}/>
    </div>
     
    <div className='mt-5 offset-md-3 col-12 col-md-5  infor'>
        <h2>{data.name ? data.name : 'NoWhere'}</h2>
        <div className='display-1'>{data.main ? data.main.temp : '65'}°C</div>
        <div className='align-items-center'>
           <span className='h5'>{data.weather ? data.weather[0].main : 'Cloud'}</span>
           <img src={`http://openweathermap.org/img/wn/${data.weather? data.weather[0].icon: '04d'}@2x.png`} alt="" />
        </div>
    </div>
    <div className='mt-5 offset-md-3 col-12 col-md-6  infor'>
        <div>
        <span className='h5'>Min - {data.main ? data.main.temp_min: '61.52'}°C</span> <span className='h5 ms-3'>Max - {data.main ? data.main.temp_max: '61.52'}°C</span>
        </div>
        <div className='mt-4'>
        <span className='h5'>Wind - {data.wind ? data.wind.speed: '10'}m/s </span>
       
         <span className='h5 ms-2'>Humidity - {data.main ? data.main.humidity: '71'}%</span> 
        </div>
        
        </div>

    </div>
}
{ show &&  <div className='row p-5' >
    <div className='offset-md-3 col-12 col-md-5   text-center'>
      <input value={location} type="text" className='form-control  d-inline rounded-5' placeholder='Enter Location ......' onChange={(e)=> setLocation(e.target.value)} onKeyPress={(e)=>{fetchData(e)}}/>
    </div>
    <div className='mt-5 offset-md-3 col-12 col-md-5  infor'>
        <h2>No data found :( </h2>
    </div>
    </div>
}
</div>
)






}
export default ShowData
