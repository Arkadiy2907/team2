import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import './SignIn.css'
import '../authentication.css'
import AuthForm from '../AuthForm'
import { useDispatch } from 'react-redux'
import { AuthAction, ISignForm, IUser } from '../../../services/types'

const SignIn: React.FC = () => {
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<ISignForm> = data => {
    const storedUsers = localStorage.getItem('users')

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers)

      const foundUser = users.find(
        user => user.login === data.login && user.password === data.password,
      )

      if (foundUser) {
        console.log('Login successful!')
        dispatch<AuthAction>({ type: 'LOGIN', payload: foundUser })
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
