<template>
  <div id="login">
    <div class="form-box">
      <span class="title">优秀瑞</span>
      <el-form label-position="right" :rules="rules" class="login-form" ref="ruleForm" :model="form">
        <el-form-item class="form-item" prop="username">
          <el-input class="form-input" @keyup.enter.native="login('ruleForm')" tabindex="0" v-model="form.username"
            placeholder="admin/user"></el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="password">
          <el-input class="form-input" @keyup.enter.native="login('ruleForm')" tabindex="0" v-model="form.password"
            placeholder="000000/111111" show-password></el-input>
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
import { reqLogin, reqMenu } from '@/api'
import { addRouting, resetRouter } from '@/router'
import { encrypt } from '@/utils/crypto'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      isRemember: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    async login(formName) {
      if (!(await this.$refs[formName].validate())) {
        return this.$message.error('请输入账号和密码')
      }

      try {
        const res = await reqLogin({
          username: encrypt(this.form.username),
          password: encrypt(this.form.password),
        })

        if (res.code !== 200) {
          return this.$message.warning(res.msg)
        }

        const storage = this.isRemember ? localStorage : sessionStorage
        storage.setItem('token', res.data.token)
        storage.setItem('userInfo', encrypt(this.form.username))

        const routes = await reqMenu();
        this.$store.commit('SETROUTES', routes.data)
        resetRouter()
        addRouting(routes.data)

        this.$message.success('登录成功')
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.$message.error('登录失败，请稍后重试')
      }
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
