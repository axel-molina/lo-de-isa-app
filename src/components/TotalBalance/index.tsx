import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { Space, Avatar } from "antd";
// Styles
import { AvatarContainer, EditStyled, ContainerStyled } from "./style";
// Redux
import { useAppSelector } from "../../app/hooks";

const index = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const userData = useAppSelector((state) => state.userData);
  const avatarEmpty =
    "https://affinitaslegal.com/wp-content/uploads/2020/08/imagen-perfil-sin-foto.jpg";

  // Mostart precio con dos decimales
  const bank = userData?.bank?.toFixed(2).replace(".", ",");

  return (
    <div style={{ margin: "0 10px" }}>
      <Space direction="vertical" size={16}>
        <Space wrap size={16}>
          <AvatarContainer ref={hoverRef}>
            <Avatar size={64} src={avatarEmpty} />
            {isHover && <EditStyled />}
          </AvatarContainer>

          <ContainerStyled>
            <span>
              <b>Bienvenido!</b> {userData.name} {userData.lastName}
            </span>
            <span>
              <b>Total:</b> ${bank}
            </span>
          </ContainerStyled>
        </Space>
      </Space>
    </div>
  );
};

export default index;
