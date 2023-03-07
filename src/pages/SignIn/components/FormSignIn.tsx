import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import useLoginHook from '../../../hooks/useLoginHook';
import { PageRoutes } from '../../../routes';

const FormSignIn = () => {
  const navigate = useNavigate();

  const email = 'admin@test.com';
  const pass = 'admin123';

  const { login, isLoading } = useLoginHook();

  // Al iniciar sesión
  const onFinish = (values: any) => {
    login(values);
  };

  // Al registrarse
  const handleRegister = () => {
    navigate(PageRoutes.registro);
  };

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
