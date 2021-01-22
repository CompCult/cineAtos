import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        title: yup.string().trim().min(3, 'Título muito pequeno').max(80, 'Título muito grande').required('Título não pode ficar em branco.'),
        description: yup.string().trim().min(3, 'Descrição muito pequena').max(1000).required('Descrição não pode ficar em branco.'),
        end_message: yup.string().trim().min(3, 'Mensagem muito pequena').max(200).required('Mensagem não pode ficar em branco.'),
        lux: yup.number().min(0, 'Lux não pode ser negativo').required('Lux não pode ficar em branco.'),
        resources: yup.number().min(0, 'Resources não pode ser negativo').required('Resources não pode ficar em branco.'),
        alternative_a: yup.string().trim().required('Alternativa A não pode ficar em branco.'),
        alternative_b: yup.string().trim().required('Alternativa B não pode ficar em branco.'),
        alternative_c: yup.string().trim().required('Alternativa C não pode ficar em branco.'),
        alternative_d: yup.string().trim().required('Alternativa D não pode ficar em branco.'),
        alternative_e: yup.string().trim().required('Alternativa C não pode ficar em branco.'),
        correct_answer: yup.string().trim().required('Alternativa correta não pode ficar em branco.')
    })
    return validations
}