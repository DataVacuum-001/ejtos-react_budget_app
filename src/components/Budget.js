import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        if(newBudget > 20000) {
          alert("The value cannot exceed remaining funds  £"+remaining);
          return;
        }

        if(newBudget < 960) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget("");

        }
        
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</span>
</div>
    );
};
export default Budget;