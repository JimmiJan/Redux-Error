import { ActionTypes } from "../constant"

const INITIAL_STATE ={
    userEmail :"",
    userPassword:"",
    userName :""
}
// console.log()
const loginReducer =(state = INITIAL_STATE, action)=>{
    
    if(action.type === ActionTypes.USER_LOGIN){
        return{
            
            ...state,
            userEmail:action.payload.email,
            userPassword:action.payload.password,
            userName :action.payload.Name
        }


    }else if(action.type === ActionTypes.USER_LOGOUT){
        return{
            ...state,
            userEmail:"",
            userPassword:"",
            userName:""
        }
    }
    else{
        return state
    }
}
export{loginReducer}