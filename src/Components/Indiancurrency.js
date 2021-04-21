import React from 'react';
import './Indinacurrency.css';

function Indiancurrency(props) {
    const {country,amount,onChangeAmount}=props;
    return (
        <div>
            <input type="number"
            placeholder="rupees here.."
            autoComplete="off"
            value={amount}
            onChange={onChangeAmount}
            className="input"></input>
            <select value={country}>
                <option>{country}</option>
            </select>
        </div>
    )
}

export default Indiancurrency;
