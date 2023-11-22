import { ADD_LIST, REMOVE_LIST } from "../actions/favAction";
 

const favInitialState = {
    favorites: []
}


const favReducer = (state = favInitialState , action) => {
    switch (action.type) {
        case ADD_LIST:
            if (!state.favorites.some(item => item.id ===action.payload.id)){
                return {
                    ...state,
                    favorites :  [...state.favorites , action.payload] 
                }
                break;
            }
            else{
                return state
            }
        case REMOVE_LIST:
            return {
                ...state,
                favorites : state.favorites.filter(item=> item.id !==action.payload)
            }    
    
        default:
           return state
            break;
    }
}

export default favReducer

// const favReducer = (state = favInitialState , action) => {

//     switch (action.type) {
//         case TOGGLE_FAVORITES:
//             return {
//                 ...state , displayFavorites : !state.displayFavorites
//             }
//             break;
        
//         case ADD_FAVORITE:
//             return {
//                 ...state, favorites: [...state.favorites , state.favorites.some(item => item.id === action.payload.id) ? null : action.payload].filter(item => item !== null)
//             }
//             break;
        
//         case REMOVE_FAVORITE:
//             return {
//                 ...state , favorites : state.favorites.filter(item => (action.payload !== item.id))
//             }
//             break;
//         default:
//             return state;
//             break;
//     }
// }