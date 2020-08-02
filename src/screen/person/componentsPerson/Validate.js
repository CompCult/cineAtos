import * as yup from 'yup';

export const Validate = (isRequired) => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3).max(50).required(),
        email: yup.string().email().required(),
        password: isRequired ? yup.string().trim().min(6).max(20).required() : yup.string().trim().min(6).max(20),
        confirmPassword: isRequired ? yup.string().trim().min(6).max(20).oneOf([yup.ref('password'), null], 'As senhas não correspondem').required() : yup.string().trim().min(6).max(20).oneOf([yup.ref('password'), null], 'As senhas não correspondem'),
        type: yup.string().required(),
    })
    return validations
}