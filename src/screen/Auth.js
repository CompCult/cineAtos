export const ID = 'Info'
export const ID2 = 'Info2'
export const getInfo = () => sessionStorage.getItem(ID)
export const getInfo2 = () => sessionStorage.getItem(ID2)

export const recordInfo = info => {
    removeInfo()
    sessionStorage.setItem(ID, info);
}

export const recordInfo2 = info => {
    removeInfo2()
    sessionStorage.setItem(ID2, info);
}

const removeInfo = () => {
    sessionStorage.removeItem(ID);
}

const removeInfo2 = () => {
    sessionStorage.removeItem(ID2);
}