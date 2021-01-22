import { toast } from "react-toastify";

const MAX_FILE_SIZE: number = 10485760;
const FILE_EXTENSIONS = ['doc', 'odt', 'rtf', 'odp', 'pps',
    'ppsx', 'xlsx', 'docx', 'pdf', 'pptx', 'ppt'];

export const validateFile = (file: File | undefined): boolean => {
    let isValid: boolean = true;

    if (file) {
        const fileType: string = file.name.split('.').pop() || '';

        if (!FILE_EXTENSIONS.includes(fileType)) {
            toast.error("O arquivo publicado não é compatível com o modelo esperado.");
            isValid = false;
        } else if (file.size > MAX_FILE_SIZE) {
            toast.error("O arquivo é maior que 10MB.");
            isValid = false;
        }

    } else {
        isValid = false;
    }

    return isValid;
}