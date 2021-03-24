export const formatName = (name: string) => {
    let nameAux: Array<string> = name.split(' ');
    let initials: string = `${nameAux[0].substr(0, 1)}${nameAux.length > 1 ? nameAux[1].substr(0, 1) : ''}`
    return initials.toLocaleUpperCase();
}