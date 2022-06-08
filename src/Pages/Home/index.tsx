import React from 'react';
import RegisterForm from '../../Containers/RegisterForm';

const Home: React.FC = () => {
  const save = (values: any): void => {
    console.log(values);
  };

  return <><RegisterForm onFinish={save}/></>;
};

export default Home;
