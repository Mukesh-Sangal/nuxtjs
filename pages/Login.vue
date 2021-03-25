<template>
  <div class="fluid-container">
    <div class="outer-cntainer">
    <h1 class="login-title">Login Page</h1>
    <b-form @submit="login($event)" id="submit-from">
      <b-form-group>
        <b-form-input v-model="form.name" required placeholder="Enter Email" type="text"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="form.password" required placeholder="Enter Password" type="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    async login (e) {
       e.preventDefault()
      //  console.log(user)
      try {
        const accessToken = await this.$axios.get("/api/session/token")
        {
          console.log(accessToken.data, "Success Token")
          const token = accessToken.data
           const userData = {
              "name":this.form.name,
              "pass":this.form.password 
            }
            console.log(userData,"Static Data")
            console.log(token, "Access Token")
          await this.$axios.post("/api/user/login?_format=hal_json",userData, {
            headers: {
            'Content-Type': 'application/hal+json',
            'X-CSRF-Token': token
          }
          });
        }
      }
      catch (error) {
        console.log(error)
      }
      this.form.name = '',
      this.form.password = ''
    }
  }
}
</script>
<style>
#login-form{
    width:30%
}
.login-btn{
    width:100%;
    color: white;
    background-color: green;
}
.outer-cntainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex: 0 0 100%;
}
.login-title{
    text-align: center;
    color: blueviolet;
}
#submit-from {
    width:30%
}
button.btn.btn-primary {
    width: 100%;
}
</style>
