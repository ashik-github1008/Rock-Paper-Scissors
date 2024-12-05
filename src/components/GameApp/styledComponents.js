import styled from 'styled-components'

export const GameAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 42px;
  padding-bottom: 42px;
  background-color: #223a5f;
  min-height: 100vh;
  padding-right: 16px;
`

export const ButtonListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  max-width: 30%;
  margin-top: 58px;
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ChoiceImage = styled.img`
  width: 180px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 12px;
  padding-left: 18px;
  padding-right: 18px;
  font-family: "Bree Serif";
  font-size: 14px;
  color: #223a5f;
  border: none;
  align-self: flex-end;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 28px;
  height: 50%;
`

export const ModalCloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  width: 34px;
  height: 34px;
`
export const RulesImgContainer = styled.div`
  padding: 32px;
`

export const RulesImg = styled.img`
  width: 720px;
  height: 490px;
`
export const GameResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  font-family: "Roboto";
`
export const GameChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
`
export const UserChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 75px;
  margin-left: 75px;
`
export const YouText = styled.p`
  color: #ffffff;
  font-size: 25px;
`
export const ChoiceImg = styled.img`
  height: 190px;
  width: 190px;
`
export const OpponentChoiceContainer = styled(UserChoiceContainer)``

export const OpponentText = styled(YouText)``

export const GameStatusAndPlayAgainBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GameResultText = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border-radius: 7px;
  font-family: "Roboto";
  border: none;
  padding: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: "Bree Serif";
`
