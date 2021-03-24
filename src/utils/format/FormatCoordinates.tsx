export const formatCoordinates = (coordinates: string | number) => {

    coordinates = coordinates.toString();
    let negative: boolean = coordinates.includes('-');
    coordinates = coordinates.replace(/\D/g, "");                   //Removes everything that is not a digit 
    coordinates = coordinates.replace(/^(\d{2})(\d)/g, "$1.$2"); //Place parentheses between the first two digitsif the phone has nine numbers 
    return `${negative ? '-' : ''}${coordinates}`;
}