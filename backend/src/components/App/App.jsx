import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import PowerCash from '../tests/PowerCash';
import { getData, storeData } from '../../helpers/localStorage';

const App = () => {
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData('data', state);
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);


  // console.log('The meter number is : 'meterNumber + ' ' + 'The aount is :'v amount);
  // const handleChange = val => {
  //   let money = 
  // }
  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='header'> Power Cash App </h1>
        <p>Use Power to buy your Electricity at home</p>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <PowerCash change={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
