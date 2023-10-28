import styled from "styled-components";

interface IContainerShow {
  show: boolean;
}

export const Container = styled.div<IContainerShow>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  width: 90%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

export const HeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
