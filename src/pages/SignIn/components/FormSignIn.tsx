import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { PageRoutes } from '../../../routes';
import useLoginHook from '../../../hooks/useLoginHook';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import useUserDataHook from '../../../hooks/useUserDataHook';
import { setUser } from '../../../features/userData/userDataSlice';

const FormSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [userEmail, setUserEmail] = useState("");
  const { getUserData, userData } = useUserDataHook();

  const token = useAppSelector((state) => state.token.value);

  const email = 'admin@test.com';
  const pass = 'admin123';

  const { login, isLoading } = useLoginHook();

  // Al iniciar sesión
  const onFinish = (values: any) => {
    setUserEmail(values.email);
    login(values);
  };

  // Al registrarse
  const handleRegister = () => {
    navigate(PageRoutes.registro);
  };


  useEffect(() => {
    if (token !== "") {
      getUserData(userEmail);
    }
  }, [token]);

  useEffect(() => {
    if (userData.id !== 0) {
      message.success(`Bienvenido ${userData.name}`);
      dispatch(setUser(userData));
      navigate("/home");
    }
  }, [userData]);
  

  return (
    <Form
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <p style={{ margin: 0 }}>Email</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Ingrese su email' }]}
          initialValue={email}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <p style={{ margin: 0 }}>Contraseña</p>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Ingrese su contraseña' }]}
          initialValue={pass}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <Button type="link">Olvidé mi contraseña</Button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            Iniciar sesión
          </Button>
          <Button type="default" block onClick={() => handleRegister()}>
            Registrarme
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FormSignIn;
