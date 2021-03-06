import React from 'react';
import { Button, Form, FormInstance, Input } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import "./style.scss";
import { NavLink } from 'react-router-dom';
import { _Routes } from '../../Utils/constanst';

interface RegisterFormProps {
  onFinish: (values: any) => void
  form: FormInstance<any>
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onFinish, form }) => {
  return <>
  <Form
    wrapperCol={{ span: 16, offset: 4 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
    form={form}
    className="form"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Por favor ingrese su nonmbre!' }]}
      >
        <Input prefix={<FontAwesomeIcon icon={faUser} className="icon"/>} placeholder="Nombre"/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Por favor ingrese su correo!', type: "email" }]}
      >
        <Input prefix={<FontAwesomeIcon icon={faLock} className="icon"/>} placeholder="Correo"/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Registrarme
        </Button>
      </Form.Item>
      <NavLink to={_Routes.Login} className="login-form-forgot">Iniciar sesión</NavLink>
    </Form>
  </>;
};

export default RegisterForm;
