import { toast } from 'react-toastify'

export const toastify = (message, type, mode) => {
  return toast[type](message, { theme: mode ? 'dark' : 'light' })
}