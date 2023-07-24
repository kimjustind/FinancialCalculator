import React, { useState } from 'react';

const CompoundInterest = () => {
    const [userValues, setUserValues] = useState({
        principal: 0,
        rate: 0,
        time: 0,
        numberOfTimesInterestApplied: 1
    });

    const handleInputChange = (event) => {
        setUserValues({
            ...userValues,
            [event.target.name]: event.target.value,
        });
    };

    const calculateCompoundInterest = () => {
        return ( userValues.principal * Math.pow(1 + (userValues.rate * .01) / userValues.numberOfTimesInterestApplied, userValues.time * userValues.numberOfTimesInterestApplied) ).toFixed(2);
    };

    return (
        <div className='form-group'>
            <h1>Compound Interest Calculator</h1>
            <label className='form-label'>Principle</label>
            <input
                type="number"
                name="principal"
                value={userValues.principal}
                onChange={handleInputChange}
                placeholder="Principal"
                className='form-input'
            />
            <label className='form-label'>Interest</label>
            <input
                type="number"
                name="rate"
                value={userValues.rate} 
                onChange={handleInputChange} 
                placeholder="Rate of Interest"
                className='form-input'
            />
            <label className='form-label'>Years</label>
            <input
                type="number" 
                name="time" 
                value={userValues.time} 
                onChange={handleInputChange} 
                placeholder="Time (in years)"
                className='form-input'
            />
            <label>Compounded</label>
            <select value={userValues.numberOfTimesInterestApplied} name="numberOfTimesInterestApplied" onChange={handleInputChange} className='form-select'>
                <option value="365">Daily</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="2">Bi-Yearly</option>
                <option value="1">Yearly</option>
            </select>
            <h2>${Number(calculateCompoundInterest()).toLocaleString('en-US')}</h2>
        </div>
    );
};

export default CompoundInterest;