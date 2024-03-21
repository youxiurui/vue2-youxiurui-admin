import {
    reqLogin
} from '@/api'
export default {
    setUserInfo(context,data){
        context.commit('SETUSERINFO',data)
    },
    setRoutes(context,{routes}){
        context.commit('SETROUTES',{routes})
    }
}