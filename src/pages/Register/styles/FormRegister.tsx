import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const FormContainerStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const LabelStyled = styled.p`
  margin: 0;
`;

export const ContainerMediaInputStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 120px;
  }
`;

export const ContainerMediaInputPassStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 100px;
  }
`;

export const ContainerMediaLabelStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputStyled = styled(Input)`
  @media (min-width: 768px) {
    width: 150%;
  }
`;

export const FormPassStyled = styled(Form.Item)`
  @media (min-width: 768px) {
    width: 136%;
  }
`;

export const UploadButtonStyled = styled(Button)`
  width: 183%;
  @media (min-width: 768px) {
    width: 177%;
  }
`;

export const ButtonContainersStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    width: 115%;
  }
`;
