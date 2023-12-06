import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SelectCurrency = (props) => {
    const { currency,dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrency = (event) => {
        currency(event.target.value);
        const setNewCurrency = {
          currency: currency,
        };

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });

    }

    return (
      <div className="input-group-btn">
        <select className="form-select hover:bg-brand-100" id="InputGroupSelect02" value={newCurrency} onChange={handleCurrency}>
          <option defaultValue>Choose</option>
          <option value='$' name='dollar'>$ Dollar</option>
          <option value='£' name='pound'>£ Pound</option>
          <option value='€' name='euro'>€ Euro</option>
          <option value='₹' name='ruppee'>₹ Ruppee</option>
        </select>
      </div>
    );
};

export default SelectCurrency;