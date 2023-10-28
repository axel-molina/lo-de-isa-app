import styled from "styled-components";

export const ContainerGridStyled = styled.div`
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  overflow-y: scroll;
`;

export const HeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ecf0f1;
  font-weight: bold;
  background-color: #ecf0f1;
`;

export const HeaderGridStyledModal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ecf0f1;
  font-weight: bold;
  background-color: #ecf0f1;
`;

export const ItemContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
`;

export const ItemContainerStyledModal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
`;

export const InfoStyled = styled.div`
  color: gray;
`;

export const EmptyProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
