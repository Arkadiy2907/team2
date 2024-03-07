import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { isLoggedAction } from '../../../store/Actions/Action';
import AuthForm from '../AuthForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ISignForm, IUser } from '../../../services/types';
import './SignUp.css';
import '../authentication.css';

const SignUp: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onSubmit: SubmitHandler<ISignForm> = (data) => {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers);

      const existingUser =
        users && users.find((user) => user.login === data.login);

      if (existingUser) {
        setErrorMessage(
          'Пользователь с таким логином уже существует. Пожалуйста, выберите другой логин.'
        );
        setErrorModalOpen(true);
        return;
      }

      users.push({ login: data.login, password: data.password });
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const newUser: IUser[] = [{ login: data.login, password: data.password }];
      localStorage.setItem('users', JSON.stringify(newUser));
    }

    console.log('Reg successful!', data);
    dispatch(isLoggedAction(true));
    nav('/search');
    // добавить логику после успешной регистрации
  };

  return (
    <AuthForm
      type={'signUp'}
      onSubmit={onSubmit}
      errorModalOpen={errorModalOpen}
      setErrorModalOpen={setErrorModalOpen}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;
