<template>
  <div id="login">
    <div class="form-box">
      <span class="title">优秀瑞</span>
      <el-form label-position="right" :rules="rules" class="login-form" ref="ruleForm" :model="form">
        <el-form-item class="form-item" prop="username">
          <el-input class="form-input" @keyup.enter.native="login('ruleForm')" tabindex="0" v-model="form.username"
            placeholder="用户名：admin"></el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="password">
          <el-input class="form-input" @keyup.enter.native="login('ruleForm')" tabindex="0" v-model="form.password"
            placeholder="密码：123456" show-password></el-input>
        </el-form-item>
        <el-form-item class="form-item">
          <el-switch v-model="isRemember" active-text="记住我"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn" type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reqLogin } from '@/api'
import { mapActions } from 'vuex'
import { encrypt,decrypt } from '@/utils/crypto'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      isRemember: true,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      account: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    ...mapActions(['setUserInfo']),
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message.error('请输入账号和密码')
          return
        }
        reqLogin({ username: encrypt(this.form.username), password: encrypt(this.form.password) }).then(res => {
          if (res.code !== 200) {
            this.$message.warning(res.msg)
            return
          }
          if (this.isRemember) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userInfo', encrypt(this.form.username))
          } else {
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('userInfo', encrypt(this.form.username))
          }
          this.$message.success('登录成功')
          this.$router.replace('/home')
        })
      })
    }
  }
}

</script>

<style scoped>
#login {
  /* width: calc(100% - 150px); */
  /* height: calc(100% - 50px); */
  width: 100%;
  height: 100%;
  min-width: 1200px;
  position: relative;
  background-image: url('@/assets/images/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.form-box {
  position: absolute;
  top: 35%;
  right: 15%;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 0 10px rgba()
}

.title {
  display: block;
  width: 100%;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  /* padding-left: 10px; */
  /* background-color: aqua; */
}

.login-form {
  width: 100% !important;
  height: 250px !important;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  /* background-color: aquamarine; */
}

.form-item {
  margin-top: 0px;
  margin-bottom: 0px !important;
}

.form-input {
  width: 350px;
}

.form-btn {
  width: 350px;
}

::v-deep .el-form-item__content {
  margin-left: 25px !important;
}
</style>
