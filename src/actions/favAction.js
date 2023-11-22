
export const ADD_LIST = 'ADD_LIST'
export const REMOVE_LIST = 'REMOVE_LIST'

export const addList = (movie) => {
    return ({type : ADD_LIST , payload : movie})
}

export const removeList = (id) => {
    return ({type : REMOVE_LIST , payload : id})
}