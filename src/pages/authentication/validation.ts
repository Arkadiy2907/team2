const REQUIRED_FIELD = 'Required'

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Login must contain only Latin characters'
    }
    return true
  },
}

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'The password length cannot be less than 6 characters'
    }
    return true
  },
}
