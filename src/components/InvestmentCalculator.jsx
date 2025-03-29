import React, { useState } from 'react'
import InvestmentForm from './InvestmentForm';
import { calculateInvestmentResults } from '../util/investment';

function InvestmentCalculator() {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const investmentResults = calculateInvestmentResults(investmentData)
    console.dir(investmentResults)
    const handleInvestmentDataChange = (inputName, value) => {
        setInvestmentData(prevInvestmentData => ({
            ...prevInvestmentData,
            [inputName]: value
        }));
    }

    return (
        <div>
            <InvestmentForm investmentData={investmentData} handleInvestmentDataChange={handleInvestmentDataChange}/>
            
            



            <p>Initial Investment: { investmentData.initialInvestment }</p>
            <p>Anual Investment: { investmentData.annualInvestment }</p>
            <p>EXPECTED RETURN: { investmentData.expectedReturn }</p>
            <p>DURATION: { investmentData.duration}</p>
        </div>
    )
}

export default InvestmentCalculator