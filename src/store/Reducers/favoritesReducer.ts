/* eslint-disable no-case-declarations */
export interface Photo {
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

export interface FavoritesState {
  favorites: Photo[]
  actionLogs: []
}

const initialState: FavoritesState = {
  favorites: [],
  actionLogs: [],
}

const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const isAlreadyInFavorites = state.favorites.some(
        favorite => favorite.id === action.payload.id,
      )
      if (isAlreadyInFavorites) {
        return state // Если уже есть, ничего не меняем
      }
      const newFavorite = {
        ...action.payload,
        isFavorite: true,
      }
      return {
        ...state,
        favorites: [...state.favorites, newFavorite],
        actionLogs: [
          ...state.actionLogs,
          { type: 'ADD_TO_FAVORITES', payload: action.payload },
        ],
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite: Photo) => favorite !== action.payload,
        ),
        actionLogs: [
          ...state.actionLogs,
          { type: 'REMOVE_FROM_FAVORITES', payload: action.payload },
        ],
      }
    default:
      return state
  }
}

export default favoritesReducer
