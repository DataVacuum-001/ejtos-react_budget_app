import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SelectCurrency = (props) => {
    const { currency,dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrency = (newCurrency) => {
        const currency = {
            currency: newCurrency,
        };

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };
    console.log({newCurrency})

    return (
      <div className="input-group-btn">
        <select className="form-select hover:bg-brand-100" id="InputGroupSelect02" value={newCurrency} onChange={e=> handleCurrency(props.value)}>
          <option value='$' name='dollar'>$ Dollar</option>
          <option value='£' name='pound'>£ Pound</option>
          <option value='€' name='euro'>€ Euro</option>
          <option value='₹' name='ruppee'>₹ Ruppee</option>
        </select>
      </div>
    );
};

export default SelectCurrency;