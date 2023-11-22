
export const ADD_LIST = 'ADD_LIST'

export const addList = (movie) => {
    return ({type : ADD_LIST , payload : movie})
}