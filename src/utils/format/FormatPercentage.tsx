const MAX_CHARACTERS: number = 5;

export const percentage = (value: string | number) => {

    value = value.toString();

    if (value.length > MAX_CHARACTERS) {
        return '100,00';
    }

    return value.replace(/\D/g, "")
        .slice(0, 4)
        .replace(/(\d{2})(\d)/g, "$1,$2");
}