import React, { useState } from 'react';

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [numberOfTimesInterestApplied, setNumberOfTimesInterestApplied] = useState(1);

    const handlePrincipalChange = (e) => {
        setPrincipal(e.target.value);
    };

    const handleRateChange = (e) => {
        setRate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleNumberOfTimesInterestAppliedChange = (e) => {
        setNumberOfTimesInterestApplied(e.target.value);
    };

    const calculateCompoundInterest = () => {
        return ( principal * Math.pow(1 + (rate * .01) / numberOfTimesInterestApplied, time * numberOfTimesInterestApplied) ).toFixed(2);
    };

    return (
        <div>
            <h1>Compound Interest Calculator</h1>
            <label>Principle</label>
            <input type="number" value={principal} onChange={handlePrincipalChange} placeholder="Principal" />
            <label>Interest</label>
            <input type="number" value={rate} onChange={handleRateChange} placeholder="Rate of Interest" />
            <label>Years</label>
            <input type="number" value={time} onChange={handleTimeChange} placeholder="Time (in years)" />
            <label>Periods</label>
            <input type="number" value={numberOfTimesInterestApplied} onChange={handleNumberOfTimesInterestAppliedChange} placeholder="No. of times interest is applied per time period" />
            <h2>{calculateCompoundInterest()}</h2>
        </div>
    );
};

export default CompoundInterest;