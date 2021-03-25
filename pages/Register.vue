<template>
  <div class="fluid-container">
    <div class="outer-cntainer">
    <h1 class="login-title">Register Page</h1>
    <b-form @submit="register($event)" id="submit-form">
      <b-form-group >
        <b-form-input v-model="form.name" required placeholder="Enter Your Name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="form.email" type="email" required placeholder="Enter Email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="form.password" required placeholder="Enter Password" type="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        name: '',
      }
    }
  },
  methods: {
    async register(e) {
      e.preventDefault()
        let data = {
          "_links":{
            "type":{
              "href":"http://my-first-drupal8-app.lndo.site:8000/rest/type/user/user"
            }
          },
          "name":[
            {"value": this.form.name}
          ],
          "mail":[
            {"value": this.form.email}
          ],
          "pass":[
            {"value": this.form.password}
          ]
        };
      try {
        const accessToken = await this.$axios.get("/api/session/token")
        {
          const token = accessToken.data
          console.log(token,"Token get Register");
          await this.$axios.post("/api/user/register?_format=hal_json", data,
          {
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
      this.form.email = '',
      this.form.name = '',
      this.form.password = ''
    }
  }
}
</script>
<style>
#register-form{
    width:30%
}
.register-btn{
    width:100%;
    color: white;
    background-color: blue;
}
.outer-cntainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex: 0 0 100%;
}
.login-title{
    text-align: center;
    color: blueviolet;
}
#submit-form {
    width: 30%
}
button.btn.btn-primary {
    width: 100%;
}
</style>
