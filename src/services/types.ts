export interface IRootStateSearch {
  isSearch: {
    isSearch: boolean
  }
}

export interface IActionsSearch {
  type: string
  payload: boolean
}

export interface ICards {
  id: string
  title: string
  date: string
  src: string
  caption?: string
  centroid_coordinates: {
    lat: string
    lon: string
  }
  isFavorite: boolean
}

export interface ICardProps {
  image: ICards
  onImageClick: (image: ICards) => void
  logged?: boolean
}

export interface IModalProps {
  open: boolean
  image: ICards | null
  onClose: () => void
}

export interface ICardsProps {
  images: ICards[]
}

export interface IActionsLogged {
  type: string
  payload: boolean
}

export interface IRootStateLogged {
  isLogged: {
    isLogged: boolean
  }
}

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

export interface FavoritesState {
  favorites: ICards[]
  actionLogs: []
}

export type FavoritesAction =
  | { type: 'ADD_TO_FAVORITES'; payload: ICards }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: ICards }

export interface RootState {
  isSearch: IRootStateSearch
  isLogged: IRootStateLogged
  favoritesReducer: FavoritesState
}
