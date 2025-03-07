import * as yup from 'yup'

export const createItemSchema = yup.object().shape({
  content: yup.string().required()
})

export const updateItemSchema = yup.object().shape({
  content: yup.string().required()
})