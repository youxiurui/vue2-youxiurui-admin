export default {
    SETUSERLOGIN(state,data){
        state.userLogin = data
    },
    SETUSERINFO(state,data){
        state.userInfo=data
    },
    SETROUTES(state,{routes}){
        state.routes=routes
    }    
}