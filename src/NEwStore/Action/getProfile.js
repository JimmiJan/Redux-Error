import axios from "axios";
import actionType from "../Constant"

const getProfile =(username)=>{
return(dispatch)=>{
    dispatch({
        type:actionType.GET_GITHUB_PROFILE_LOADING,
    })

    const searchValue = username ? username :"example";
    axios.get(`https://api.github.com/users/${searchValue}`)
    .then((res)=>{
        dispatch({
            type:actionType.GET_GITHUB_PROFILE,
            payload:res.data,
        })
    }).then((err)=>{
        dispatch({
            type:actionType.GET_GITHUB_PROFILE_ERROR,
            payload:err.message
        })
    })
}
    // GET_GITHUB_PROFILE_LOADING:"GET_GITHUB_PROFILE_LOADING",
    

}

export {getProfile}