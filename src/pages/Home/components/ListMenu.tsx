import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Add, Edit, History } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../routes";

const ListMenu = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <List
      sx={{
        marginTop: "30px",
      }}
    >
      <Divider />
      <ListItemButton onClick={() => handleClick(PageRoutes.venta)}>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText primary="Crear orden de venta" />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={() => handleClick(PageRoutes.editStock)}>
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        <ListItemText primary="Editar stock" />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={() => handleClick(PageRoutes.historial)}>
        <ListItemIcon>
          <History />
        </ListItemIcon>
        <ListItemText primary="Historial de ventas" />
      </ListItemButton>
      <Divider />
    </List>
  );
};

export default ListMenu;
