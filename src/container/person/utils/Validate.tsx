import * as yup from 'yup';

export const Validate = (isRequired: boolean) => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3, 'Nome muito pequeno').max(80, 'Nome muito grande').required('Nome não pode ficar em branco.'),
        email: yup.string().email('Email invalido').required('Email não pode ficar em branco.'),
        password: isRequired ? yup.string().trim().min(6, 'Senha muito pequena').max(30, 'Senha muito grande').required() : yup.string().trim().min(6).max(30),
        confirmPassword: isRequired ? yup.string().trim().min(6, 'Senha muito pequena').max(3030, 'Senha muito grande').oneOf([yup.ref('password'), ''], 'As senhas não correspondem').required() : yup.string().trim().min(6).max(30).oneOf([yup.ref('password'), ''], 'As senhas não correspondem'),
        type: yup.string().required(),
        institution: yup.string().when('type', {
            is: type => type === 'professor' || type === 'estudante',
            then: yup.string().trim().min(2, 'Instituição com nome muito pequeno').required('Instituição não pode ficar em branco.')
        })
    })
    return validations
}