import React, { useState } from 'react'

function InvestmentCalculator() {
    const [investmentData, setInvestmentData] = useState({
        initial_investment: 0,
        annual_investment: 0,
        expected_return: 0,
        duration: 0,
    });

    const handleInputChange = (e, inputName) => {
        const value = Number(e.target.value)
        setInvestmentData(prevInvestmentData => ({
            ...prevInvestmentData,
            [inputName]: value >= 0 ? value : 0
        }))
    }

    return (
        <div>InvestmentCalculator
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label htmlFor="">Initial Investment</label>
                        <input type="number" value={investmentData.initial_investment} onChange={(e) => handleInputChange(e, 'initial_investment')}/>
                    </div>
                    <div>
                        <label htmlFor="">Anual Investment</label>
                        <input type="number" value={investmentData.annual_investment} onChange={(e) => handleInputChange(e, 'annual_investment')}/>
                    </div>
                    <div>
                        <label htmlFor="">Expected Return</label>
                        <input type="number" value={investmentData.expected_return} onChange={(e) => handleInputChange(e, 'expected_return')}/>
                    </div>
                    <div>
                        <label htmlFor="">Duration</label>
                        <input type="number" value={investmentData.duration} onChange={(e) => handleInputChange(e, 'duration')}/>
                    </div>
                </div>
            </div>

            <p>Initial Investment: { investmentData.initial_investment }</p>
            <p>Anual Investment: { investmentData.annual_investment }</p>
            <p>EXPECTED RETURN: { investmentData.expected_return }</p>
            <p>DURATION: { investmentData.duration}</p>
        </div>
    )
}

export default InvestmentCalculator