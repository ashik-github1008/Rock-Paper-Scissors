import {
  ScoreCardContainer,
  ScoreCardChoiceList,
  ScoreCardChoiceListItem,
  ScoreContainer,
  ScoreText,
  ScoreNumber,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <ScoreCardContainer>
      <ScoreCardChoiceList>
        <ScoreCardChoiceListItem>ROCK</ScoreCardChoiceListItem>
        <ScoreCardChoiceListItem>PAPER</ScoreCardChoiceListItem>
        <ScoreCardChoiceListItem>SCISSORS</ScoreCardChoiceListItem>
      </ScoreCardChoiceList>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreContainer>
    </ScoreCardContainer>
  )
}

export default ScoreCard
