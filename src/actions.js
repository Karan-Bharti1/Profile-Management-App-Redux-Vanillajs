export const ADD_PROFILE="profile/added"
export const REMOVE_PROFILE="profile/remove"
export const CALCULATE_AVERAGE_AGE="profile/calculateAverageAge"
export const addProfileAction=(profileId,name,age)=>
({type:ADD_PROFILE,payloadId:profileId,payloadName:name,payloadAge:age})
export const removeProfileAction=(id)=>({type:REMOVE_PROFILE,payload:id})
export const calculateAgeAction=()=>({type:CALCULATE_AVERAGE_AGE})