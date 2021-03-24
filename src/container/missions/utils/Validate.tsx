import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3, 'Nome muito pequeno').max(80, 'Nome muito grande').required('Nome não pode ficar em branco.'),
        description: yup.string().trim().min(3, 'Descrição muito pequena').max(1000).required('Descrição não pode ficar em branco.'),
        end_message: yup.string().trim().min(3, 'Mensagem muito pequena').max(200).required('Mensagem não pode ficar em branco.'),
        lux: yup.number().min(0, 'Lux não pode ser negativo').required('Lux não pode ficar em branco.'),
        resources: yup.number().min(0, 'Resources não pode ser negativo').required('Resources não pode ficar em branco.'),
    })
    return validations
}