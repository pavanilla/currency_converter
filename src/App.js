import React,{useEffect,useState} from 'react';
import './App.css';
import Currency_row from './Components/Currency_row';
import Indiancurrency from './Components/Indiancurrency';


const BASE_URL='http://api.exchangeratesapi.io/v1/latest?access_key=0cf5d54e6b9c48cf19da125943b4415b'

function App() {

  const [countries,setCountries]=useState([]);
  const [FromCountry,setFromCountry]=useState();
  const [ToCountry,setToCountry]=useState();
  const [fromAmount,setFromAmount]=useState(0.00)
  const [rates,setRates]=useState({});
   
let data=()=>{
  for(let i in rates){
    if(i===ToCountry){
      return rates[i]*0.012*fromAmount;
    }
  }
}
let display=data();
 useEffect(()=>{
              fetch(`${BASE_URL}`)
              .then((response)=>response.json())
              .then((data)=>setRates(data.rates));
 },[fromAmount])


useEffect(()=>{
  fetch(BASE_URL)
  .then((res)=>res.json())
  .then((data)=>{
    const india=Object.keys(data.rates)[66]
    const currency=Object.keys(data.rates)[0]
    setCountries([...Object.keys(data.rates)])
    setFromCountry(india)
    setToCountry(currency)

}) 
},[])



  return (
    <div className="App">
      <h1>Currency converter</h1>
      <div className="text">
        <h2>{fromAmount}</h2><p> Indian Rupee Equals </p><hr></hr>
        <h1>{display} {ToCountry}</h1> 
      </div>
      <div className="components">
        <Indiancurrency 
         country={FromCountry}
         amount={fromAmount}
         onChangeAmount={(e)=>setFromAmount(e.target.value)}/>
        <Currency_row 
          currencyOptions={countries}
          toCountry={ToCountry}
          amount={data()}
          onChangeCurrency={(e)=>setToCountry(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;



