// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
// Styles
import {
  FormStyled,
  LabelStyled,
  ButtonsContainerStyled,
  RememberContainerStyled,
} from "../styles/FormSignInStyled";
import { PageRoutes } from "../../../routes";
// Hooks
import useLoginHook from "../../../hooks/useLoginHook";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { setUser } from "../../../features/userData/userDataSlice";

const FormSignIn = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const [userEmail, setUserEmail] = useState("");

  // const token = useAppSelector((state) => state.token.value);

  const email = "test@example.com";
  const pass = "12345678";

  // Custom hooks
  const { handleLogin, isLoading } = useLoginHook();

  // Al iniciar sesión
  const onFinish = (values: any) => {
    handleLogin(values);
  };

  // Al registrarse
  const handleRegister = () => {
    navigate(PageRoutes.register);
  };

  return (
    <FormStyled
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <div>
        <LabelStyled>Email</LabelStyled>
        <Form.Item
          name="identity"
          rules={[{ required: true, message: "Ingrese su email" }]}
          initialValue={email}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <LabelStyled>Contraseña</LabelStyled>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Ingrese su contraseña" }]}
          initialValue={pass}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <RememberContainerStyled>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <Button type="link">Olvidé mi contraseña</Button>
        </RememberContainerStyled>

        <ButtonsContainerStyled>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            Iniciar sesión
          </Button>
          <Button type="default" block onClick={() => handleRegister()}>
            Registrarme
          </Button>
        </ButtonsContainerStyled>
      </div>
    </FormStyled>
  );
};

export default FormSignIn;
