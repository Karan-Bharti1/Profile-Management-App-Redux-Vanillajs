import { createStore } from 'redux';
import './style.css';
import profileReducer from './profileReducer';
import { addProfileAction } from './actions';
const profileId=document.getElementById("profileId")
const name=document.getElementById("name")
const age=document.getElementById("age")
const addProfile=document.getElementById("addProfile")
const profileDisplay=document.getElementById("profileDisplay")
const store=createStore(profileReducer)
const addProfileHandler=()=>{
    const profileIdVal=profileId.value
    const nameVal=name.value
    const ageVal=age.value
    if(profileIdVal && nameVal && ageVal){
        store.dispatch(addProfileAction(profileIdVal,nameVal,ageVal))
    }

}
addProfile.addEventListener("click",addProfileHandler)
const updateProfileDisplay=()=>{
    const state=store.getState()
   profileDisplay.innerHTML= state.profile.map(pro=>`<li>${pro.id}-${pro.name}-${pro.age}</li>`).join("")
}
updateProfileDisplay()
store.subscribe(updateProfileDisplay)