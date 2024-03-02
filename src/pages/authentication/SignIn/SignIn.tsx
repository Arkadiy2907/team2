import React, { useState } from 'react'
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form'
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { loginValidation, passwordValidation } from '../validation'
import { ISignForm, IUser } from '../Interfaces'
import './SignIn.css'
import '../authentication.css'
import AuthForm from '../AuthForm'

const SignIn: React.FC = () => {
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit: SubmitHandler<ISignForm> = data => {
    const storedUsers = localStorage.getItem('users')

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers)

      const foundUser = users.find(
        user => user.login === data.login && user.password === data.password,
      )

      if (foundUser) {
        console.log('Login successful!')
        //добавить логику после успешного логина
      } else {
        console.log('Неправильные введенные данные. Попробуйте снова.')
        setErrorMessage('Неправильные введенные данные. Попробуйте снова.')
        setErrorModalOpen(true)
      }
    } else {
      console.log('Пользователь не найдет. Попробуйте снова.')
      setErrorMessage('Пользователь не найдет. Попробуйте снова.')
      setErrorModalOpen(true)
    }
  }

  return (
    <AuthForm
      type={'signIn'}
      onSubmit={onSubmit}
      errorModalOpen={errorModalOpen}
      setErrorModalOpen={setErrorModalOpen}
      errorMessage={errorMessage}
    />
  )
}

export default SignIn
