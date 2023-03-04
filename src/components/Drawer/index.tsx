import { Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { showDrawer } from '../../features/drawer/drawerSlice';

const index = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.drawer.showDrawer);
    
      const onClose = () => {
        dispatch(showDrawer(false));
      };

  return (
    <div>
        <Drawer title="Molisoft" placement="left" onClose={onClose} open={open}>
        <p>Ajustes</p>
        <p>Cerrar sesión</p>
      </Drawer>
    </div>
  )
}

export default index