import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageRoutes } from '../../../routes';
// Styles
import {
  InputStyled,
  LabelStyled,
  FormPassStyled,
  UploadButtonStyled,
  FormContainerStyled,
  ButtonContainersStyled,
  ContainerMediaInputStyled,
  ContainerMediaLabelStyled,
  ContainerMediaInputPassStyled,
} from '../styles/FormRegister';

const FormRegister = () => {
  const navigate = useNavigate();

  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // eslint-disable-next-line
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleRegister = () => {
    // eslint-disable-next-line
    console.log('registrar');
  };

  const handleReturnToLogin = () => {
    navigate(PageRoutes.iniciarSesion);
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
              rules={[{ required: true, message: 'Ingrese su nombre' }]}
            >
              <InputStyled placeholder="Nombre" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Apellido */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Apellido</LabelStyled>
            <Form.Item name="lastname">
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
              rules={[{ required: true, message: 'Ingrese su email' }]}
            >
              <InputStyled placeholder="Email" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Avatar */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Imagen de perfil</LabelStyled>
            <div style={{ margin: '0 0 24px 0' }}>
              <Upload {...props}>
                <UploadButtonStyled icon={<UploadOutlined />}>
                  Click to Upload
                </UploadButtonStyled>
              </Upload>
            </div>
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
              name="password"
              rules={[{ required: true, message: 'Ingrese su contraseña' }]}
            >
              <Input.Password placeholder="Contraseña" />
            </FormPassStyled>
          </ContainerMediaLabelStyled>

          {/* Reingresar Contraseña */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Reingresar contraseña</LabelStyled>
            <FormPassStyled
              name="reenterPassword"
              rules={[
                { required: true, message: 'Ingrese su contraseña nuevamente' },
              ]}
            >
              <Input.Password placeholder="Contraseña" />
            </FormPassStyled>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputPassStyled>

        <ContainerMediaInputStyled>
          {/* Nombre de tu negocio */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Nombre de tu negocio </LabelStyled>
            <Form.Item
              name="businessName"
              rules={[
                { required: true, message: 'Ingrese el nombre de su negocio' },
              ]}
            >
              <InputStyled placeholder="Nombre de tu negocio" />
            </Form.Item>
          </ContainerMediaLabelStyled>

          {/* Dinero actual en cuenta */}
          <ContainerMediaLabelStyled>
            <LabelStyled>Dinero actual en cuenta </LabelStyled>
            <Form.Item
              name="bank"
              rules={[
                {
                  required: true,
                  message: 'Ingrese el dinero actual en su cuenta',
                },
              ]}
            >
              <InputStyled placeholder="Dinero actual" type="number" />
            </Form.Item>
          </ContainerMediaLabelStyled>
        </ContainerMediaInputStyled>

        <ButtonContainersStyled>
          <Button type="primary" htmlType="submit" block>
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
