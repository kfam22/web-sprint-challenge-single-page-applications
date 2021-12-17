import * as yup from 'yup';

const pizzaFormSchema = yup.object().shape({
    name: yup
    .string()
    .required()
    .trim()
    .min(2, 'name must be at least 2 characters')
})

export default pizzaFormSchema;