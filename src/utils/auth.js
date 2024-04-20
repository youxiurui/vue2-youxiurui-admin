import Vue from "vue"
import { decrypt } from "@/utils/crypto"

Vue.directive('auth',{
    inserted(el,bnd){
        let userInfo=localStorage.getItem('userInfo')||sessionStorage.getItem('userInfo')
        if(!userInfo){
            return
        }
        userInfo=decrypt(userInfo)
        if(userInfo!=='admin'){
            el.style.pointerEvents = 'none'
        }
    }
})