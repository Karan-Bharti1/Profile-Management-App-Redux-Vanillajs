import { createStore } from 'redux';
import './style.css';
import profileReducer from './profileReducer';
import { addProfileAction, calculateAgeAction, removeProfileAction } from './actions';
const profileId=document.getElementById("profileId")
const name=document.getElementById("name")
const age=document.getElementById("age")
const addProfile=document.getElementById("addProfile")
const profileDisplay=document.getElementById("profileDisplay")
const removeId=document.getElementById("removeId")
const removeButton=document.getElementById("removeButton")
const averageAgeDisplay=document.getElementById("averageAgeDisplay")
const store=createStore(profileReducer)
const addProfileHandler=()=>{
    const profileIdVal=profileId.value
    const nameVal=name.value
    const ageVal=age.value
    if(profileIdVal && nameVal && ageVal){
        store.dispatch(addProfileAction(profileIdVal,nameVal,ageVal))
        store.dispatch(calculateAgeAction())
        profileId.value = "";
        name.value = "";
        age.value = "";
    }

}
const removeButtonHandler=()=>{
    const removeIdVal=removeId.value
    if(removeIdVal){
        store.dispatch(removeProfileAction(removeIdVal))
        store.dispatch(calculateAgeAction())
        removeId.value = "";
    }
}
addProfile.addEventListener("click",addProfileHandler)
removeButton.addEventListener("click",removeButtonHandler)
const updateProfileDisplay=()=>{
    const state=store.getState()
   profileDisplay.innerHTML= state.profile.map(pro=>`<li>${pro.id} ${pro.name} (${pro.age} years old)

   </li>`).join("")
   if (state.profile.length>0) averageAgeDisplay.textContent=`Average Age: ${state.ageAvg}`
}
updateProfileDisplay()
store.subscribe(updateProfileDisplay)