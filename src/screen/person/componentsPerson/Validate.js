import * as yup from 'yup';

export const Validate = (isRequired) => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3).max(80).required(),
        email: yup.string().email().required(),
        password: isRequired ? yup.string().trim().min(6).max(30).required() : yup.string().trim().min(6).max(30),
        confirmPassword: isRequired ? yup.string().trim().min(6).max(30).oneOf([yup.ref('password'), null], 'As senhas não correspondem').required() : yup.string().trim().min(6).max(30).oneOf([yup.ref('password'), null], 'As senhas não correspondem'),
        type: yup.string().required(),
    })
    return validations
}