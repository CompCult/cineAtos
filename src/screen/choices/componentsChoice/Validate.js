import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        title: yup.string().trim().min(3).max(50).required(),
        description: yup.string().trim().min(3).required(),
        lux: yup.number().required(),
        resources: yup.number().required(),
        alternative_a: yup.string().trim().required(),
        alternative_b: yup.string().trim().required(),
        alternative_c: yup.string().trim().required(),
        alternative_d: yup.string().trim().required(),
        alternative_e: yup.string().trim().required(),
        correct_answer: yup.string().trim().required()

    })
    return validations
}