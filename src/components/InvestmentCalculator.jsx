import React, { useState } from 'react'
import InvestmentForm from './InvestmentForm';
import { calculateInvestmentResults, formatter } from '../util/investment';
import InvestmentResultTable from './InvestmentResultTable';

function InvestmentCalculator() {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const investmentResults = calculateInvestmentResults(investmentData);
    const handleInvestmentDataChange = (inputName, value) => {
        setInvestmentData(prevInvestmentData => ({
            ...prevInvestmentData,
            [inputName]: value
        }));
    }

    return (
        <div>
            <InvestmentForm investmentData={investmentData} handleInvestmentDataChange={handleInvestmentDataChange} />
            <InvestmentResultTable investmentResults={investmentResults}/>
        </div>
    )
}

export default InvestmentCalculator