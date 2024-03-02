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
import { ISignForm, IUser } from '../Interfaces'
import { loginValidation, passwordValidation } from '../validation'
import './SignUp.css'
import '../authentication.css'
import AuthForm from '../AuthForm'

const SignUp: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [errorModalOpen, setErrorModalOpen] = useState(false)

  const onSubmit: SubmitHandler<ISignForm> = data => {
    const storedUsers = localStorage.getItem('users')

    if (storedUsers) {
      const users: IUser[] = JSON.parse(storedUsers)

      const existingUser = users.find(user => user.login === data.login)

      if (existingUser) {
        setErrorMessage(
          'Пользователь с таким логином уже существует. Пожалуйста, выберите другой логин.',
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

    console.log('Reg successful!', data)
    // добавить логику после успешной регистрации
  }

  return (
    <AuthForm
      type={'signUp'}
      onSubmit={onSubmit}
      errorModalOpen={errorModalOpen}
      setErrorModalOpen={setErrorModalOpen}
      errorMessage={errorMessage}
    />
    // <div className="auth-page">
    //   <div className="auth-form">
    //     <Typography variant="h4" component="div">
    //       Зарегистрируйтесь
    //     </Typography>

    //     <Typography
    //       variant="subtitle1"
    //       component="div"
    //       gutterBottom={true}
    //       className="auth-form__subtitle"
    //     >
    //       чтобы создать аккаунт
    //     </Typography>

    //     <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
    //       <Controller
    //         control={control}
    //         name="login"
    //         rules={loginValidation}
    //         render={({ field }) => (
    //           <TextField
    //             label="Логин"
    //             size="small"
    //             margin="normal"
    //             fullWidth={true}
    //             className="auth-form__input"
    //             onChange={e => field.onChange(e)}
    //             value={field.value}
    //             error={!!errors.login?.message}
    //             helperText={errors.login?.message}
    //           />
    //         )}
    //       />

    //       <Controller
    //         control={control}
    //         name="password"
    //         rules={passwordValidation}
    //         render={({ field }) => (
    //           <TextField
    //             label="Пароль"
    //             type="password"
    //             size="small"
    //             margin="normal"
    //             fullWidth={true}
    //             className="auth-form__input"
    //             onChange={e => field.onChange(e)}
    //             value={field.value}
    //             error={!!errors.password?.message}
    //             helperText={errors.password?.message}
    //           />
    //         )}
    //       />

    //       <Button
    //         type="submit"
    //         variant="contained"
    //         fullWidth={true}
    //         sx={{ marginTop: 2 }}
    //       >
    //         Зарегистрироваться
    //       </Button>
    //     </form>
    //   </div>

    //   <Dialog open={errorModalOpen} onClose={handleModalClose}>
    //     <DialogTitle>Ошибка!</DialogTitle>
    //     <DialogContent>
    //       <Typography>{errorMessage}</Typography>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleModalClose} color="primary">
    //         OK
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    // </div>
  )
}

export default SignUp
