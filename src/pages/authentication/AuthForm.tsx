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
import { ISignForm, IUser } from './Interfaces'
import { loginValidation, passwordValidation } from './validation'

interface AuthFormProps {
  type: 'signUp' | 'signIn' // Specify the type of authentication form
  onSubmit: (data: any) => any
  errorModalOpen: boolean
  setErrorModalOpen: (data: any) => any // You might want to replace 'any' with the actual type of form data
  errorMessage: string
}

const AuthForm: React.FunctionComponent<AuthFormProps> = ({
  type,
  onSubmit,
  errorModalOpen,
  setErrorModalOpen,
  errorMessage,
}) => {
  const { handleSubmit, control } = useForm<ISignForm>()
  const { errors } = useFormState({ control })
  // const [errorModalOpen, setErrorModalOpen] = useState(false)

  const handleModalClose = () => {
    setErrorModalOpen(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-form">
        <Typography variant="h4" component="div">
          {type === 'signUp' ? 'Зарегистрируйтесь' : 'Войдите'}
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom={true}
          className="auth-form__subtitle"
        >
          {type === 'signUp'
            ? 'чтобы создать аккаунт'
            : 'чтобы получить доступ'}
        </Typography>

        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                size="small"
                margin="normal"
                fullWidth={true}
                className="auth-form__input"
                onChange={e => field.onChange(e)}
                value={field.value}
                error={!!errors.login?.message}
                helperText={errors.login?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                label="Пароль"
                type="password"
                size="small"
                margin="normal"
                fullWidth={true}
                className="auth-form__input"
                onChange={e => field.onChange(e)}
                value={field.value}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            sx={{ marginTop: 2 }}
          >
            {type === 'signUp' ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </form>
      </div>

      <Dialog open={errorModalOpen} onClose={handleModalClose}>
        <DialogTitle>Ошибка!</DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AuthForm
