import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} = matchDetails
  const matchClassName = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="card-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-logo"
      />
      <p className="result">{result}</p>
      <p className={`match-status ${matchClassName}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
