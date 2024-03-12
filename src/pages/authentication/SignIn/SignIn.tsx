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

const SignIn: React.FC = () => {
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit: SubmitHandler<IUser> = data => {
    const storedUsers = localStorage.getItem('users')

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers)

      const foundUser =
        users &&
        users.find(
          user => user.login === data.login && user.password === data.password,
        )

      if (foundUser) {
        dispatch(setNameAction(data.login))
        dispatch(isLoggedAction(true))
        dispatch(isSearchAction(false))
        nav('/main')
      } else {
        console.log('Incorrect login or password entered. Try again.')
        setErrorMessage('Incorrect login or password entered. Try again.')
        setErrorModalOpen(true)
      }
    } else {
      console.log('User not found. Try again.')
      setErrorMessage('User not found. Try again.')
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
