export const ID = 'Info'
export const getInfo = () => sessionStorage.getItem(ID)

export const recordInfo = info => {
    removeInfo()
    sessionStorage.setItem(ID, info);
}

const removeInfo = () => {
    sessionStorage.removeItem(ID);
}