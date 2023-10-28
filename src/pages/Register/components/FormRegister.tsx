import { Button, Form, Input } from "antd";
// Hook
import { useAppSelector } from "../../../app/hooks";
// Styles
import {
  InputStyled,
  LabelStyled,
  FormPassStyled,
  FormContainerStyled,
  ButtonContainersStyled,
  ContainerMediaInputStyled,
  ContainerMediaLabelStyled,
  ContainerMediaInputPassStyled,
} from "../styles/FormRegister";
import useRegisterHook from "../../../hooks/useRegisterHook";

const FormRegister = () => {
  const { register, handleReturnToLogin } = useRegisterHook();

  const isLoading = useAppSelector(
    (state) => state.loadingAuth.isLoadingRegister
  );

  // Al presionar registrarse
  const handleRegister = (values: any) => {
    register(values);
  };

  return (
    <FormContainerStyled
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleRegister}
    >
      <div>
        <ContainerMediaInputStyled>
          {/* Nombre */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Nombre</LabelStyled>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Ingrese su nombre" }]}
            >
              <InputStyled placeholder="Nombre" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Apellido */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Apellido</LabelStyled>
            <Form.Item name="lastName">
              <InputStyled placeholder="Apellido" />
            </Form.Item>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputStyled>

        <ContainerMediaInputStyled>
          {/* Email */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Email</LabelStyled>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Ingrese su email" }]}
            >
              <InputStyled placeholder="Email" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Avatar url */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Avatar (url)</LabelStyled>
            <Form.Item name="avatar">
              <InputStyled placeholder="url" type="url" />
            </Form.Item>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputStyled>

        <ContainerMediaInputPassStyled>
          {/* Contraseña */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Contraseña</LabelStyled>
            <FormPassStyled
              name="password"
              rules={[{ required: true, message: "Ingrese su contraseña" }]}
            >
              <Input.Password placeholder="Contraseña" />
            </FormPassStyled>
          </ContainerMediaLabelStyled>

          {/* Reingresar Contraseña */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Reingresar contraseña</LabelStyled>
            <FormPassStyled
              name="passwordConfirm"
              rules={[{ required: true, message: "Ingrese su contraseña" }]}
            >
              <Input.Password
                placeholder="Contraseña"
                style={{ maxWidth: "100%" }}
              />
            </FormPassStyled>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputPassStyled>

        <ButtonContainersStyled>
          <Button type="default" block onClick={() => handleReturnToLogin()}>
            Ya tengo cuenta
          </Button>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            Registrarme
          </Button>
        </ButtonContainersStyled>
      </div>
    </FormContainerStyled>
  );
};

export default FormRegister;
