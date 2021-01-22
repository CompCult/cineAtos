export const formatTelephone = (telephone: string | number) => {

    telephone = telephone.toString();
    telephone = telephone.replace(/\D/g, "");                   //Removes everything that is not a digit 
    telephone = telephone.replace(/^(\d{2})(\d)/g, "($1) $2"); //Place parentheses between the first two digits
    telephone = telephone.replace(/(\d)(\d{4})$/, "$1-$2");    //Put a hyphen between the fourth and fifth digits
    telephone = telephone.replace(/(\d)(\d{4})/g, "$1 $2");    //Put space between the third and fourth digits if the phone has nine numbers 
    return telephone;
}