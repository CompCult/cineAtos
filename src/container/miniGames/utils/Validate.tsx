import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        title: yup.string().trim().min(3, 'Título muito pequeno').max(80, 'Título muito grande').required('Título não pode ficar em branco.'),
        description: yup.string().trim().min(3, 'Descrição muito pequena').max(1000).required('Descrição não pode ficar em branco.'),
        lux: yup.number().min(0, 'Lux não pode ser negativo').required('Lux não pode ficar em branco.'),
        resources: yup.number().min(0, 'Resources não pode ser negativo').required('Resources não pode ficar em branco.'),
    })
    return validations;
}