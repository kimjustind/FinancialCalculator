import React, { useState } from 'react';

const LoanCalculator = () => {
    const [userValues, setUserValues] = useState({
        amount: 0,
        interest: 0,
        years: 1,
        loanTotal: 0
    });

    const handleInputChange = (event) => {
        setUserValues({
            ...userValues,
            [event.target.name]: event.target.value,
        });
    };

    // Add your calculation function here
    function CalculateInterest() {
        const interest = userValues.interest * 0.01;
        if (interest === 0) {
            return (userValues.amount/userValues.years/12);
        } else {
            return ( (interest/12 * userValues.amount) / (1 - (Math.pow((1 + interest/12), -userValues.years * 12))) );
        }
    }
    function Total() {
        return (CalculateInterest() * 12 * userValues.years).toFixed(2);
    }
    
    return (
        <div>
            <form>
                <label>Principle:</label>
                <input
                    type='number'
                    name='amount'
                    placeholder='Loan Amount'
                    value={userValues.amount}
                    onChange={handleInputChange}
                />
                <label>Years:</label>
                <input
                    type='number'
                    name='years'
                    placeholder='Loan in Years'
                    value={userValues.years}
                    onChange={handleInputChange}
                />
                <label>Interest Rate:</label>
                <input
                    type='number'
                    name='interest'
                    placeholder='Interest Rate'
                    value={userValues.interest}
                    onChange={handleInputChange}
                />
            </form>
            <h2>${Math.round(CalculateInterest() * 100) / 100} per month</h2>
            <h2>Total: ${Total()}</h2>
        </div>
    );
};

export default LoanCalculator;
