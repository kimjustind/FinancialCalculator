import React, { useState } from 'react';

const HouseAfford = () => {
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
        return principal * (1 + rate / numberOfTimesInterestApplied) ** (numberOfTimesInterestApplied * time);
    };

    return (
        <div>
            <h1>Affordable Home Payments</h1>
            <input type="number" value={principal} onChange={handlePrincipalChange} placeholder="Principal" />
            <input type="number" value={rate} onChange={handleRateChange} placeholder="Rate of Interest" />
            <input type="number" value={time} onChange={handleTimeChange} placeholder="Time (in years)" />
            <input type="number" value={numberOfTimesInterestApplied} onChange={handleNumberOfTimesInterestAppliedChange} placeholder="No. of times interest is applied per time period" />
            <h2>{calculateCompoundInterest()}</h2>
        </div>
    );
};

export default HouseAfford;