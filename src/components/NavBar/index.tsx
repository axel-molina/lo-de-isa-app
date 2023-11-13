import React from "react";
// Styles
import {
  TitleStyled,
  LinkStyled,
  ContainerStyled,
  MenuContainerStyled,
  CloseSessionContainerStyled,
} from "./style";
// Assets
import icon from "../../assets/images/molino.png";
// Components
import { Button } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
// Hooks
import useNavBarHook from "../../hooks/useNavBarHook";

const index = () => {
  const { handleShow, closeSession } = useNavBarHook();

  return (
    <ContainerStyled>
      <TitleStyled>
        <LinkStyled to="/">
          <img
            src={icon}
            alt="molisoft icon"
            loading="lazy"
            style={{ width: "2rem" }}
          />
          Molisoft
        </LinkStyled>
      </TitleStyled>
      <MenuContainerStyled onClick={() => handleShow()}>
        <MenuOutlined style={{ color: "#1b7d98", fontSize: "2rem" }} />
      </MenuContainerStyled>
      <CloseSessionContainerStyled>
        <Button color="error" onClick={() => closeSession()}>
          Cerrar sesión
        </Button>
        <Button>
          <SettingsIcon />
        </Button>
      </CloseSessionContainerStyled>
    </ContainerStyled>
  );
};

export default index;
