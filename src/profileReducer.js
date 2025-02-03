import { ADD_PROFILE, CALCULATE_AVERAGE_AGE, REMOVE_PROFILE } from "./actions"
const profiles = [  
    { id: 1, name: "Alice", age: 25 },  
    { id: 2, name: "Bob", age: 30 },  
    { id: 3, name: "Charlie", age: 35 }
];
const averageAge=profiles.reduce((acc,curr)=>acc+curr.age,0)/profiles.length
const initialState={profile:profiles,ageAvg:averageAge}
const profileReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_PROFILE:
        return{...state,profile:[...state.profile,
            {id:Number(action.payloadId),name:action.payloadName,age: Number(action.payloadAge)}
        ]}
        case REMOVE_PROFILE:
            return {...state,profile:state.profile.filter(pro=>pro.id!==Number(action.payload))}
        case CALCULATE_AVERAGE_AGE:
            const totalAge = state.profile.reduce((acc, curr) => acc + curr.age, 0);
            const averageAge = state.profile.length ? totalAge / state.profile.length : 0;
            return { ...state, ageAvg: averageAge.toFixed(2) };
      
        default:
            return state
}

}
export default profileReducer;