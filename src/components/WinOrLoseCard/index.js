// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-value">{scoreLabel}</p>
        <p className="current-score-label">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-img" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
