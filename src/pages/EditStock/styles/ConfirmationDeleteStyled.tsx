import styled from "styled-components";

interface IContainerModalStyled {
  show: boolean;
}

export const ContainerModalStyled = styled.div<IContainerModalStyled>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.196);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

export const ModalStyled = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const MessageStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonsContainedStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;
