import {
    AUTH_USER,
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
}from '../_actions/types'



export default function(state={},action){

    switch(action.type){
        case AUTH_USER:
            return {...state, userData : action.payload }
        case REGISTER_USER:
            return {...state, register : action.payload }
        case LOGIN_USER:
            return {...state , loginSucces: action.payload}
        case LOGOUT_USER:
            return {...state}
      
            
        default:
            return state;
    }
}