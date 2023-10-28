import styled from "styled-components";
import { Form, Button } from "antd";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelStyled = styled.p`
  margin: 0;
`;

export const RememberContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const GoogleIconStyled = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonGoogleStyled = styled(Button)`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
