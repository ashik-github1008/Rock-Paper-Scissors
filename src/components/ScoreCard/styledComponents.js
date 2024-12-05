import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  border: 2px solid #ffffff; 
  width: 65%;
  height: 23vh;
  padding: 26px;
`
export const ScoreCardChoiceList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
  font-family: 'Bree Serif';
  color: #ffffff;
`
export const ScoreCardChoiceListItem = styled.li`
  font-size: 28px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 7px;
  // padding-top: 0px;
  // padding-bottom: 20px;
  color: #223a5f;
  height: 98%;
  width: 152px;
  border-radius: 12px;
  padding: 8px;
`
export const ScoreText = styled.p`
  font-family: "Bree Serif";
  font-size: 26px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ScoreNumber = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  margin-top: 5px;;
  font-size: 42px;
`
