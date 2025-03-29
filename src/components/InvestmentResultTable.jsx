import { formatter } from "../util/investment"

function InvestmentResultTable({ investmentResults }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults &&
                    investmentResults.map(({ year, interest, valueEndOfYear, totalInterestForYear, annualInvestment }) => (<tr key={year}>
                        <td className="center">{year}</td>
                        <td className="center">{formatter.format(valueEndOfYear)}</td>
                        <td className="center">{formatter.format(interest)}</td>
                        <td className="center">{formatter.format(totalInterestForYear)}</td>
                        <td className="center">{formatter.format(valueEndOfYear - totalInterestForYear)}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default InvestmentResultTable