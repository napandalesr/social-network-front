import React from 'react';
import { Button, Form, FormInstance, Input } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

import "./style.scss";
import { NavLink } from 'react-router-dom';
import { _Routes } from '../../Utils/constanst';

interface LoginFormProps {
  onFinish: (values: any) => void
  form: FormInstance<any>
};

const LoginForm: React.FC<LoginFormProps> = ({ onFinish, form }) => {
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
        name="email"
        rules={[{ required: true, message: 'Por favor ingrese su correo!', type: "email" }]}
      >
        <Input prefix={<FontAwesomeIcon icon={faUser} className="icon"/>} placeholder="Correo"/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
      <Form.Item>
        <NavLink to={_Routes.Register} className="login-form-forgot">Registrarme</NavLink>
      </Form.Item>
    </Form>
  </>;
};

export default LoginForm;
