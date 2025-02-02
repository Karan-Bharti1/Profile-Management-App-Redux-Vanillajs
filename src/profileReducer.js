import { ADD_PROFILE, CALCULATE_AVERAGE_AGE, REMOVE_PROFILE } from "./actions"

const initialState={profile:[],ageAvg:0}
const profileReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_PROFILE:
        return{...state,profile:[...state.profile,
            {id:action.payloadId,name:action.payloadName,age: Number(action.payloadAge)}
        ]}
        case REMOVE_PROFILE:
            return {...state,profile:state.profile.filter(pro=>pro.id!==action.payload)}
        case CALCULATE_AVERAGE_AGE:
            const totalAge = state.profile.reduce((acc, curr) => acc + curr.age, 0);
            const averageAge = state.profile.length ? totalAge / state.profile.length : 0;
            return { ...state, ageAvg: averageAge.toFixed(2) };
      
        default:
            return state
}

}
export default profileReducer;