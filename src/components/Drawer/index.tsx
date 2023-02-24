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
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default index