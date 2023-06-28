import { extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'this field is not valid',
})
extend('required', {
  ...required,
  message: 'this field is required',
})
