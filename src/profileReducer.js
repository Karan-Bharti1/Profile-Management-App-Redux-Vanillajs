import { ADD_PROFILE, REMOVE_PROFILE } from "./actions"

const initialState={profile:[]}
const profileReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_PROFILE:
        return{...state,profile:[...state.profile,
            {id:action.payloadId,name:action.payloadName,age: action.payloadAge}
        ]}
        case REMOVE_PROFILE:
            return {...state,profile:state.profile.filter(pro=>pro.id!=action.payload)}
        default:
            return state
}

}
export default profileReducer;