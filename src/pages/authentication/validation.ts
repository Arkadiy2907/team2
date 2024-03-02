const REQUIRED_FIELD = 'Обязательно для заполнения'

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать кириллицу'
    }
    return true
  },
}

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Длина пароля не может быть меньше 6-ти символов'
    }
    return true
  },
}
