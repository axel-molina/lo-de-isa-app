import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { Space, Avatar, Modal, Input } from "antd";
// Styles
import {
  AvatarContainerStyled,
  EditStyled,
  ContainerStyled,
} from "../styles/TotalBalanceStyled";
// Redux
import { useAppSelector } from "../../../app/hooks";
// Hooks
import useEditAvatarHooks from "../hooks/useEditAvatarHooks";

const TotalBalance = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const userData = useAppSelector((state) => state.userData);
  const avatarEmpty =
    "https://affinitaslegal.com/wp-content/uploads/2020/08/imagen-perfil-sin-foto.jpg";

  // Mostrar precio con dos decimales
  const bank = userData?.bank?.toFixed(2).replace(".", ",");

  const { editAvatar } = useEditAvatarHooks();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const data = {
      avatar: url,
    };

    await editAvatar(data);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ margin: "0 10px" }}>
      <Space direction="vertical" size={16}>
        <Space wrap size={16}>
          <AvatarContainerStyled ref={hoverRef} onClick={showModal}>
            <Avatar
              size={64}
              src={
                userData.avatar === "" ||
                userData.avatar === null ||
                userData.avatar === undefined
                  ? avatarEmpty
                  : userData?.avatar
              }
            />
            {isHover && <EditStyled />}
          </AvatarContainerStyled>

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
      <Modal
        title="Pega la url de tu avatar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="Url" onChange={(e) => setUrl(e.target.value)} />
      </Modal>
    </div>
  );
};

export default TotalBalance;
