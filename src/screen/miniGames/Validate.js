import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        title: yup.string().trim().min(3).max(50).required(),
        description: yup.string().trim().min(3).max(50).required(),
        lux: yup.number().required(),
        resources: yup.number().required(),
    })
    return validations
}