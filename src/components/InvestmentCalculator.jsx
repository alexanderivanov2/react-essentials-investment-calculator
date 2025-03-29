import React, { useState } from 'react'
import InvestmentForm from './InvestmentForm';
import { calculateInvestmentResults, formatter } from '../util/investment';
import InvestmentResultTable from './InvestmentResultTable';

function InvestmentCalculator() {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
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