import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import {
  isLoggedAction,
  isSearchAction,
  setNameAction,
} from '../../../store/Actions/Action'
import AuthForm from '../AuthForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../../services/types'
import '../authentication.css'

const SignUp: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit: SubmitHandler<IUser> = data => {
    const storedUsers = localStorage.getItem('users')

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers)

      const existingUser =
        users && users.find(user => user.login === data.login)

      if (existingUser) {
        setErrorMessage(
          'User with this login already exists. Please choose a different login.',
        )
        setErrorModalOpen(true)
        return
      }

      users.push({ login: data.login, password: data.password })
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      const newUser: IUser[] = [{ login: data.login, password: data.password }]
      localStorage.setItem('users', JSON.stringify(newUser))
    }
    dispatch(setNameAction(data.login))
    dispatch(isLoggedAction(true))
    dispatch(isSearchAction(false))
    nav('/main')
  }

  return (
    <AuthForm
      type={'signUp'}
      onSubmit={onSubmit}
      errorModalOpen={errorModalOpen}
      setErrorModalOpen={setErrorModalOpen}
      errorMessage={errorMessage}
    />
  )
}

export default SignUp
