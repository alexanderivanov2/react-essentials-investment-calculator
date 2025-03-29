import React from 'react'

function InvestmentForm({ investmentData, handleInvestmentDataChange }) {
    const handleInputChange = (e, inputName) => {
        let value =  e.target.value.replace(/^0+/, "") || "0";
        if (value < 0) {
            value = 0;
        }
        handleInvestmentDataChange(inputName, Number(value));
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" value={investmentData.initialInvestment} onChange={(e) => handleInputChange(e, 'initialInvestment')} />
                </div>
                <div>
                    <label htmlFor="">Anual Investment</label>
                    <input type="number" value={investmentData.annualInvestment} onChange={(e) => handleInputChange(e, 'annualInvestment')} />
                </div>
                <div>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" value={investmentData.expectedReturn} onChange={(e) => handleInputChange(e, 'expectedReturn')} />
                </div>
                <div>
                    <label htmlFor="">Duration</label>
                    <input type="number" value={investmentData.duration} onChange={(e) => handleInputChange(e, 'duration')} />
                </div>
            </div>
        </div>
    )
}

export default InvestmentForm;