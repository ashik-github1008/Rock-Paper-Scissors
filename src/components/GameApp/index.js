import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard/index'

import {
  GameAppContainer,
  ButtonListContainer,
  ChoiceButton,
  ChoiceImage,
  RulesButton,
  ModalContainer,
  ModalCloseButton,
  RulesImg,
  RulesImgContainer,
  GameResultsViewContainer,
  GameChoiceContainer,
  UserChoiceContainer,
  YouText,
  ChoiceImg,
  OpponentChoiceContainer,
  OpponentText,
  GameStatusAndPlayAgainBtnContainer,
  GameResultText,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameApp extends Component {
  state = {
    score: 0,
    userChoice: null,
    opponentChoice: null,
    result: '',
    isGameView: false,
  }

  getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    return choicesList[randomIndex]
  }

  determineResult = (userId, opponentId) => {
    if (userId === opponentId) {
      return 'IT IS DRAW'
    }
    if (
      (userId === 'ROCK' && opponentId === 'SCISSORS') ||
      (userId === 'SCISSORS' && opponentId === 'PAPER') ||
      (userId === 'PAPER' && opponentId === 'ROCK')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  handleChoiceClick = userChoice => {
    const opponentChoice = this.getRandomChoice()
    const result = this.determineResult(userChoice.id, opponentChoice.id)
    this.setState(prevState => {
      let updatedScore = prevState.score
      if (result === 'YOU WON') {
        updatedScore += 1
      } else if (result === 'YOU LOSE') {
        updatedScore -= 1
      }
      return {
        score: updatedScore,
        userChoice,
        opponentChoice,
        result,
        isGameView: true,
      }
    })
  }

  handlePlayAgain = () => {
    this.setState({
      userChoice: null,
      opponentChoice: null,
      result: '',
      isGameView: false,
    })
  }

  renderGameResultsView = () => {
    const {userChoice, opponentChoice, result} = this.state

    return (
      <GameResultsViewContainer>
        <GameChoiceContainer>
          <UserChoiceContainer>
            <YouText>You</YouText>
            <ChoiceImg src={userChoice.imageUrl} alt="your choice"></ChoiceImg>
          </UserChoiceContainer>
          <OpponentChoiceContainer>
            <OpponentText>OPPONENT</OpponentText>
            <ChoiceImg
              src={opponentChoice.imageUrl}
              alt="opponent choice"
            ></ChoiceImg>
          </OpponentChoiceContainer>
        </GameChoiceContainer>
        <GameStatusAndPlayAgainBtnContainer>
          <GameResultText>{result}</GameResultText>
          <PlayAgainButton onClick={this.handlePlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameStatusAndPlayAgainBtnContainer>
      </GameResultsViewContainer>
    )
  }

  renderGamePlayingView = () => {
    return (
      <ButtonListContainer>
        {choicesList.map(eachChoice => (
          <ChoiceButton
            key={eachChoice.id}
            data-testid={`${eachChoice.id.toLowerCase()}Button`}
            alt={`${eachChoice.id.toLowerCase()}Button`}
            onClick={() => this.handleChoiceClick(eachChoice)}
          >
            <ChoiceImage
              src={eachChoice.imageUrl}
              alt={eachChoice.id}
            ></ChoiceImage>
          </ChoiceButton>
        ))}
      </ButtonListContainer>
    )
  }

  render() {
    const {score, isGameView} = this.state
    return (
      <GameAppContainer>
        <ScoreCard score={score} />
        {isGameView
          ? this.renderGameResultsView()
          : this.renderGamePlayingView()}
        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <ModalContainer>
              <ModalCloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </ModalCloseButton>
              <RulesImgContainer>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                ></RulesImg>
              </RulesImgContainer>
            </ModalContainer>
          )}
        </Popup>
      </GameAppContainer>
    )
  }
}

export default GameApp
