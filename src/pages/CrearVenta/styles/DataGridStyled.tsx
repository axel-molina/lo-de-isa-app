import styled from 'styled-components';

export const ContainerGridStyled = styled.div`
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  height: 60vh;
  overflow-y: scroll;
`;

export const HeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ecf0f1;
  font-weight: bold;
  background-color: #ecf0f1;
`;

export const ItemContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
`;
