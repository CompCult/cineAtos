import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        email: yup.string().required('Email não pode ficar em branco.'),
        password: yup.string().trim().min(6).max(20).required('Senha não pode ficar em branco.')
    })
    return validations;
}