import { Divider, Form, notification, Spin } from 'antd';
import React from 'react';
import RegisterForm from '../../Containers/RegisterForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import "./style.scss";
import { userHttp } from '../../Api/Module/users';

const Register: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const save = async (values: any): Promise<void> => {
    setLoading(true);
    try {
      const response = await userHttp.post(values);
      setLoading(false);
      console.log(response);
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        notification.success({
          message: 'Usuario creado exitosamente',
          duration: 400
        });
        form.resetFields();
        navigate("/Login", { replace: true });
      }
    } catch (error) {
      notification.error({
        message: 'Hubo en error intente de nuevo',
        duration: 400
      });
      console.log(error);
      setLoading(false);
    }
  };

  return <section className='main-register'>
    <div className="register">
      <Spin size="large" spinning={loading}>
        <Divider className='title' orientation='center'><div className="conten-icon"><FontAwesomeIcon icon={faUser}/></div></Divider>
        <RegisterForm onFinish={save} form={form}/>
      </Spin>
    </div>
  </section>;
};

export default Register;
