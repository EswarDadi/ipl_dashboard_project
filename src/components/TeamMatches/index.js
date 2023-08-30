import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetailsData: {},
    banner: '',
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRecentMatchesData()
  }

  getRecentMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const updatedData = {
      competingTeam: latestMatchData.latestMatchDetails.competing_team,
      id: latestMatchData.latestMatchDetails.id,
      umpires: latestMatchData.latestMatchDetails.umpires,
      result: latestMatchData.latestMatchDetails.result,
      manOfTheMatch: latestMatchData.latestMatchDetails.man_of_the_match,
      venue: latestMatchData.latestMatchDetails.venue,
      competingTeamLogo: latestMatchData.latestMatchDetails.competing_team_logo,
      matchStatus: latestMatchData.latestMatchDetails.match_status,
      firstInnings: latestMatchData.latestMatchDetails.first_innings,
      secondInnings: latestMatchData.latestMatchDetails.second_innings,
      date: latestMatchData.latestMatchDetails.date,
    }
    const formatedData = latestMatchData.recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      id: eachMatch.id,
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      venue: eachMatch.venue,
      competingTeamLogo: eachMatch.competing_team_logo,
      matchStatus: eachMatch.match_status,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      date: eachMatch.date,
    }))

    this.setState({latestMatchDetailsData: updatedData, isLoading: false})
    this.setState({banner: latestMatchData.teamBannerUrl})
    this.setState({matchData: formatedData})
  }

  renderMatchDetails = () => {
    const {matchData} = this.state
    return (
      <div>
        <div className="matches-container">
          <ul className="match-card-container">
            {matchData.map(matchCard => (
              <MatchCard matchDetails={matchCard} key={matchCard.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, latestMatchDetailsData, banner} = this.state

    return (
      <div className="team-matches-container">
        <img src={banner} alt="team banner" className="image-banner" />

        <LatestMatch
          latestMatchDetails={latestMatchDetailsData}
          key={latestMatchDetailsData.id}
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderMatchDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
