import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { PageRoutes } from '../../../routes';
// Hook

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
} from '../styles/FormRegister';
import useRegisterHook from '../../../hooks/useRegisterHook';

const FormRegister = () => {
  const navigate = useNavigate();

    const { register, isLoading } = useRegisterHook();

  const handleReturnToLogin = () => {
    navigate(PageRoutes.iniciarSesion);
  };

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
              name="Name"
              rules={[{ required: true, message: 'Ingrese su nombre' }]}
            >
              <InputStyled placeholder="Nombre" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Apellido */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Apellido</LabelStyled>
            <Form.Item name="Lastname">
              <InputStyled placeholder="Apellido" />
            </Form.Item>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputStyled>

        <ContainerMediaInputStyled>
          {/* Email */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Email</LabelStyled>
            <Form.Item
              name="Email"
              rules={[{ required: true, message: 'Ingrese su email' }]}
            >
              <InputStyled placeholder="Email" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Avatar url */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Avatar (url)</LabelStyled>
            <Form.Item name="Avatar">
              <InputStyled placeholder="url" type="url" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Numero de contacto */}
          {/* <ContainerMediaLabelStyled>
            <LabelStyled>Número de teléfono</LabelStyled>
            <Form.Item name="number">
              <Input placeholder="Número de teléfono" type="tel" />
            </Form.Item>
          </ContainerMediaLabelStyled> */}
        </ContainerMediaInputStyled>

        <ContainerMediaInputPassStyled>
          {/* Contraseña */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Contraseña</LabelStyled>
            <FormPassStyled
              name="Password"
              rules={[{ required: true, message: 'Ingrese su contraseña' }]}
            >
              <Input.Password placeholder="Contraseña" />
            </FormPassStyled>
          </ContainerMediaLabelStyled>

          {/* Reingresar Contraseña */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Reingresar contraseña</LabelStyled>
            <FormPassStyled
              name="RePassword"
              rules={[{ required: true, message: 'Ingrese su contraseña' }]}
            >
              <Input.Password
                placeholder="Contraseña"
                style={{ maxWidth: '100%' }}
              />
            </FormPassStyled>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputPassStyled>

        <ContainerMediaInputStyled>
          {/* Nombre de tu negocio */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Nombre de tu negocio </LabelStyled>
            <Form.Item
              name="BusinessName"
              rules={[{ required: true, message: 'Ingrese su negocio' }]}
            >
              <InputStyled placeholder="Nombre de tu negocio" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Dinero actual en cuenta */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Dinero actual en cuenta </LabelStyled>
            <Form.Item
              name="Bank"
              rules={[
                {
                  required: true,
                  message: 'Ingrese el dinero actual',
                },
              ]}
            >
              <InputStyled placeholder="Dinero actual" type="number" />
            </Form.Item>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputStyled>

        <ButtonContainersStyled>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            Registrarme
          </Button>
          <Button type="default" block onClick={() => handleReturnToLogin()}>
            Ya tengo cuenta
          </Button>
        </ButtonContainersStyled>
      </div>
    </FormContainerStyled>
  );
};

export default FormRegister;
