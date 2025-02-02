export const ADD_PROFILE="profile/added"
export const addProfileAction=(profileId,name,age)=>
({type:ADD_PROFILE,payloadId:profileId,payloadName:name,payloadAge:age})
