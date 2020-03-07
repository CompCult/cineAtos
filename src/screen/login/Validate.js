import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().trim().min(6).max(20).required()
    })
    return validations
}