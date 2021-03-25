<template>
  <div class="fluid-container">
    <Header/>
    <div class="outer-cntainer">
    <h1 class="login-title">Login Page</h1>
    <b-form @submit="login($event)" id="submit-from">
      <b-form-group>
        <b-form-input v-model="form.name" required placeholder="Enter Email" type="text"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="form.password" required placeholder="Enter Password" type="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" @click="login(form)"  variant="primary">{{ buttonText }}</b-button>
    </b-form>
    </div>
    <Footer/>
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
  props: ["login", "buttonText"],
  methods: {
    async login (e) {
       e.preventDefault()
      //  console.log(user)
      try {
        const accessToken = await this.$axios.get("http://193.168.1.101/mynewproject/web/session/token")
        {
          console.log(accessToken.data, "Success Token")
          const token = accessToken.data
          // const name = this.form.email;
          // const password = this.form.password;
           const userData = {
              "name":this.form.name,
              "pass":this.form.password 
            }
            console.log(userData,"Static Data")
          await this.$axios.post("/api/user/login?_format=hal_json",userData, {
            
            headers: {
            'Content-Type': 'application/hal+json',
            'X-CSRF-Token': token
          }
          });
      }
      }catch (error) {
        console.log(error)
      }
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
