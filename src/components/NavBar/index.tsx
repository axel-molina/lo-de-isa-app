import React from "react";
import { Button } from "@mui/material";
import {
  TitleStyled,
  LinkStyled,
  ContainerStyled,
  MenuContainerStyled,
  CloseSessionContainerStyled,
} from "./style";
import icon from "../../assets/images/molino.png";
import { MenuOutlined } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppDispatch } from "../../app/hooks";
import { showDrawer } from "../../features/drawer/drawerSlice";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../routes";

const index = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const handleShow = () => {
    dispatch(showDrawer(true));
  };

  const closeSession = () => {
    localStorage.clear();
    navigation(PageRoutes.login);
  };

  return (
    <ContainerStyled>
      <TitleStyled>
        <LinkStyled to="/">
          <img src={icon} alt="molisoft icon" style={{ width: "2rem" }} />
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
