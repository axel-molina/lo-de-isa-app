import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const FormSignIn = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
      }}
    >
      <div>
        <p style={{ margin: 0}}>Email</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Ingrese su email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <p style={{ margin: 0}}>Contraseña</p>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Ingrese su contraseña' }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Checkbox>Recordarme</Checkbox>
          <Button type="link">Olvidé mi contraseña</Button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button type="primary" block>
            Iniciar sesión
          </Button>
          <Button type="default" block>
            Registrarme
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FormSignIn;