// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
// Styles
import {
  FormStyled,
  LabelStyled,
  GoogleIconStyled,
  ButtonGoogleStyled,
  ButtonsContainerStyled,
  RememberContainerStyled,
} from "../styles/FormSignInStyled";
import googleIcon from "../assets/google.png";
import { PageRoutes } from "../../../routes";
// Services
import useHttplogin from "../../../services/auth/useHttpLogin";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useGoogleLogin } from "@react-oauth/google";

const FormSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // Services
  const { httpLoginAsync } = useHttplogin();

  const isLoading = useAppSelector((state) => state.loadingAuth.isLoadingLogin);

  const mail = "molinaprueba@gmail.com";
  const pass = "Ivanmln99*";

  // Al iniciar sesión
  const handleSignIn = (values: any) => {
    const { email, password } = values;
    dispatch(httpLoginAsync(email, password));
  };

  // Al registrarse
  const handleRegister = () => {
    navigate(PageRoutes.register);
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <FormStyled
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleSignIn}
    >
      <div>
        <LabelStyled>Email</LabelStyled>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Ingrese su email" }]}
          initialValue={mail}
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
        <ButtonGoogleStyled onClick={() => loginGoogle()}>
          <GoogleIconStyled src={googleIcon} alt="google" />
          <span>Ingresar con Google</span>
        </ButtonGoogleStyled>
      </div>
    </FormStyled>
  );
};

export default FormSignIn;
