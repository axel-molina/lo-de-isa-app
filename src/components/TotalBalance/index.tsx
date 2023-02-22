import { useRef } from 'react';
import { useHover } from 'usehooks-ts';
import { Space, Avatar } from 'antd';
// Styles
import { AvatarContainer , EditStyled, ContainerStyled} from './style';


const index = () => {

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <Space direction='vertical' size={16}>
      <Space wrap size={16}>
        
        <AvatarContainer ref={hoverRef}>
            <Avatar size={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2fxU0V4e0DTSEosMXbVxjNBNhCVvlBjLyT4KsVq-3XYI70eWTsz3EaeeWI_cGwxpsq4&usqp=CAU'/>
            {isHover && <EditStyled/>}
        </AvatarContainer>
        
        
            <ContainerStyled >
            <span><b>Bienvenido!</b> Axel Molina</span>
            <span><b>Total:</b> $120.000,00</span>
            </ContainerStyled>
         </Space>
    </Space>
  );
};

export default index;
