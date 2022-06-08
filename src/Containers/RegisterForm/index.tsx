import { Button, Form, Input } from 'antd';
import React from 'react';

interface RegisterFormProps {
  onFinish: (values: any) => void
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onFinish }) => {
  return <>
  <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Por favor ingrese su nonmbre!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Correo"
        name="email"
        rules={[{ required: true, message: 'Por favor ingrese su correo!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  </>;
};

export default RegisterForm;
