import React from 'react'
import { useForm, Controller, useFormState } from 'react-hook-form'
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { loginValidation, passwordValidation } from './validation'
import { AuthFormProps, IUser } from '../../services/types'

const AuthForm: React.FunctionComponent<AuthFormProps> = ({
  type,
  onSubmit,
  errorModalOpen,
  setErrorModalOpen,
  errorMessage,
}) => {
  const { handleSubmit, control } = useForm<IUser>()
  const { errors } = useFormState({ control })

  const handleModalClose = () => {
    setErrorModalOpen(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-form">
        <Typography variant="h4" component="div">
          {type === 'signUp' ? 'Sign up' : 'Sign in'}
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom={true}
          className="auth-form__subtitle"
        >
          {type === 'signUp' ? 'to create an account' : 'to get access'}
        </Typography>

        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="login"
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
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="password"
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
            {type === 'signUp' ? 'Sign up' : 'Sign in'}
          </Button>
        </form>
      </div>

      <Dialog open={errorModalOpen} onClose={handleModalClose}>
        <DialogTitle>Error!</DialogTitle>
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
