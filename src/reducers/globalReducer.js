import { GET_TRENDING, LOADING,GET_SEARCH,GET_FAVORITES ,ADD_TO_LIKED} from "../utils/globalActions"

export const globalReducer= (state,action)=>{
    switch(action.type){
        case LOADING:
            return {...state,loading:true}
        case GET_TRENDING:
            return{
                ...state,
                loading:false,
                trending:action.payload}
        case GET_SEARCH:
            return{
                ...state,
                loading:false,
                searchResults:action.payload}
        case ADD_TO_LIKED:
            return{
                ...state,
                liked:[...state.liked,action.payload]
            }
        case GET_FAVORITES:
            return{
                ...state,
                liked:action.payload
            }
        default:
            break
    }
    return state 
}