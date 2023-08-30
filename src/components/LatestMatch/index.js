import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    umpires,
    result,
    firstInnings,
    secondInnings,
    competingTeamLogo,
    venue,
    date,
    manOfTheMatch,
  } = latestMatchDetails
  return (
    <div>
      <p className="latest-matches-heading">Latest Matches</p>
      <div className="latest-match-container">
        <div className="latest-match-card">
          <div>
            <h1 className="competing-team-name">{competingTeam}</h1>
            <p className="match-details">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <div>
            <img
              src={competingTeamLogo}
              alt={competingTeam}
              className="competing-team-logo"
            />
          </div>
        </div>
        <hr className="horizantal-line" />
        <div>
          <p className="match-details">First Innings</p>
          <p className="match-details">{firstInnings}</p>
          <p className="match-details">Second Innings</p>
          <p className="match-details">{secondInnings}</p>
          <p className="match-details">Man Of The Match</p>
          <p className="match-details">{manOfTheMatch}</p>
          <p className="match-details">Umpires</p>
          <p className="match-details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
