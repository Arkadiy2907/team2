export interface IUser {
  login: string
  password: string
}

export interface ISignForm {
  login: string
  password: string
}

export interface AuthFormProps {
  type: 'signUp' | 'signIn'
  onSubmit: (data: ISignForm) => void
  errorModalOpen: boolean
  setErrorModalOpen: (data: boolean) => void
  errorMessage: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: IUser | null
}

export interface LoginSuccessAction {
  type: 'LOGIN'
  payload: IUser
}

export interface LogoutAction {
  type: 'LOGOUT'
}

export type AuthAction = LoginSuccessAction | LogoutAction
