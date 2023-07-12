import styled from "styled-components";
import { Edit } from "@mui/icons-material";

export const AvatarContainerStyled = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
`;

export const EditStyled = styled(Edit)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 19px;
  color: white;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
