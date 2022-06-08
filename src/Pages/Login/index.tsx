import { Divider, Form, notification, Spin } from 'antd';
import React from 'react';
import LoginForm from '../../Containers/LoginForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { httpUser } from '../../Redux/Thunk/User';

import "./style.scss";

const Login: React.FC = () => {
  const { loading } = useSelector((state: any) => state.UserReducer);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const save = async (values: any): Promise<void> => {
    try {
      dispatch(await httpUser(values));
    } catch (error) {
      notification.error({
        message: 'Hubo en error intente de nuevo',
        duration: 400
      });
      console.log(error);
    }
  };

  return <section className='main-register'>
    <div className="register">
      <Spin size="large" spinning={loading}>
        <Divider className='title' orientation='center'><div className="conten-icon"><FontAwesomeIcon icon={faUser}/></div></Divider>
        <LoginForm onFinish={save} form={form}/>
      </Spin>
    </div>
  </section>;
};

export default Login;
