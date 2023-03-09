import { useNavigate } from 'react-router-dom';
import {
  ListItemButton,
  ListItemIcon,
  Drawer,
  ListItemText,
  Divider,
} from '@mui/material';
import { PowerSettingsNew, Settings } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { showDrawer } from '../../features/drawer/drawerSlice';
import { PageRoutes } from '../../routes';

const index = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const open = useAppSelector((state) => state.drawer.showDrawer);

  const onClose = () => {
    dispatch(showDrawer(false));
  };

  const closeSession = () => {
    localStorage.clear();
    navigation(PageRoutes.iniciarSesion); 
  };

  return (
    <div>
      <Drawer anchor={'bottom'} open={open} onClose={onClose}>
        <div style={{ padding: '0 10px' }}>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Ajustes" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => closeSession()}>
            <ListItemIcon>
              <PowerSettingsNew style={{ color: "red"}}/>
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItemButton>
        </div>
      </Drawer>
    </div>
  );
};

export default index;
