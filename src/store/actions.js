import {
    reqLogin
} from '@/api'
export default {
    userLogin(state,params) {
        return reqLogin(params).then(res=>{
            state.commit('SETUSERLOGIN',res)
            return res
        })
    },
    setUserInfo(state,{username,password}){
        
    },
    setRoutes(state,{routes}){
        state.commit('SETROUTES',{routes})
    }
}