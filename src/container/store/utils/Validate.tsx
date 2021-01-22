import * as yup from "yup";

export const Validate = () => {
    let validations = yup.object().shape({
        title: yup
            .string()
            .trim()
            .min(3, "O titulo deve ter no mínimo 3 caracteres")
            .max(50, "O título deve ter acima máximo 50 caracteres")
            .required("Informe o titulo do item"),
        description: yup
            .string()
            .trim()
            .min(3, "A descrição deve ter no mínimo 3 caracteres")
            .max(50, "A descrição deve ter acima máximo 50 caracteres")
            .required("Informe a descrição do item"),
        quantity: yup
            .number()
            .moreThan(0, "Informe a quantidade de items")
            .required("Informe a quantidade de items"),
        value: yup
            .number()
            .moreThan(0, "Informe a quantidade de items")
            .required("Informe o valor de cada item")
    });
    return validations;
};
