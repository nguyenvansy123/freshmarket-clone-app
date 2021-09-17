import {categoryConstants} from "../actions/constants"
const initial={
    categories:[],
    loading: false,
    error:null
}

export default (state=initial,action)=>{
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state={...state,loading:true}
            break;

        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state={...state,loading:false,categories:action.payload.categories}
            break;

        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state={...state,loading:false,error:action.payload.error}
            break;
    
        default:
            break;
            
    }
    return state
}