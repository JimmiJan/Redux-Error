import actionType from "../Constant";

const INITIAL_VALUE ={
    userData :{},
    userDataLOading :false,
    userDataError:""

}
const getProfileReducer = (state=INITIAL_VALUE,action)=>{
    switch (action.type) {
        case actionType.GET_GITHUB_PROFILE_LOADING:
            return{
                ...state,
                userDataLOading:true,
                
            }
            case actionType.GET_GITHUB_PROFILE:
            return {
                ...state,
                userDataLOading:false,
                userData :action.payload,
                userDataError:""

            }
            case actionType.GET_GITHUB_PROFILE_ERROR:
                return{
                    ...state,
                    userDataLOading:false,
                    userDataError:action.payload,
                    userData:{}

                }
            
   
    
        default:
            return state;
    }
}
export {getProfileReducer}