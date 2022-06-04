function Card({ company }) {
  return (
    <div className="bg-slate-700 rounded-md p-4 text-white text-center">
      <h2 className="text-xl font-medium mb-8 border-b-2 border-slate-300">{company.company_name}</h2>
      <span className="mx-2 bg-green-300 rounded-full text-black p-1 hover:">{company.environment_grade}</span>
      <span className="mx-2 bg-yellow-300 rounded-full text-black p-1">{company.social_grade}</span>
      <span className="mx-2 bg-blue-300 rounded-full text-black p-1">{company.governance_grade}</span>
    </div>
  )
}

export default Card

// "esg_id":"4720",
// "company_name":"Microsoft Corporation",
// "exchange_symbol":"NASDAQ",
// "stock_symbol":"MSFT",
// "environment_grade":"AA",
// "environment_level":"Excellent",
// "social_grade":"BBB",
// "social_level":"High",
// "governance_grade":"BB",
// "governance_level":"Medium",
// "total_grade":"A",
// "total_level":"High",
// "disclaimer":"ESG Enterprise's ESG Rating data are all based on public information and provided for informational purposes only. No member of ESG Enterprise or related parties make any prediction, warranty or representation whatsoever, expressly or impliedly, either as to the suitability of our Scores for any particular purposes or the validity of any derivative analysis or conclusion based on the Scores.",
// "last_processing_date":"27-04-2022",
// "environment_score":715,
// "social_score":443,
// "governance_score":375,
// "total":"1533"
// }