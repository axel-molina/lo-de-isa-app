import { useRef } from 'react';
import { useHover } from 'usehooks-ts';
import { Space, Avatar } from 'antd';
// Styles
import { AvatarContainer , EditStyled, ContainerStyled} from './style';
// Redux
import { useAppSelector } from '../../app/hooks';


const index = () => {

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  const bankAccount = useAppSelector((state) => state.userData.bank);

  // Mostart precio con dos decimales
  const bank = bankAccount?.toFixed(2).replace('.', ',');

  return (
    <Space direction='vertical' size={16}>
      <Space wrap size={16}>
        
        <AvatarContainer ref={hoverRef}>
            <Avatar size={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2fxU0V4e0DTSEosMXbVxjNBNhCVvlBjLyT4KsVq-3XYI70eWTsz3EaeeWI_cGwxpsq4&usqp=CAU'/>
            {isHover && <EditStyled/>}
        </AvatarContainer>
        
        
            <ContainerStyled >
            <span><b>Bienvenido!</b> Axel Molina</span>
            <span><b>Total:</b> ${bank}</span>
            </ContainerStyled>
         </Space>
    </Space>
  );
};

export default index;
