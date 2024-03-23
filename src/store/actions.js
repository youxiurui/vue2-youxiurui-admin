import {
    reqLogin
} from '@/api'
export default {
    setUserInfo(context,data){
        context.commit('SETUSERINFO',data)
    },
    setRoutes(context,data){
        context.commit('SETROUTES',data)
    }
}