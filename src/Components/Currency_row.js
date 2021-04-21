import React from 'react';
import './Currency_row.css';

function Currency_row(props) {


  const {currencyOptions,toCountry,onChangeCurrency,amount,onChangeAmount}=props;

    return (
        <div>
            <input
            type="number"
             className="input"
             value={amount}
             onChange={onChangeAmount}></input>
            <select value={toCountry} onChange={onChangeCurrency}>
                {currencyOptions.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Currency_row;
