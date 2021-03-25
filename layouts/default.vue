<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse navItem-end" is-nav>
          <div class="login-link links"><NuxtLink to="/login">Login</NuxtLink></div>
          <div class="register-link links"><NuxtLink to="/register">Register</NuxtLink></div>
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    <Nuxt />
    <div class="main-footer">
      <p class="footer-div">Copyright 2021 © gai Technologies Pvt Ltd. All Rights Reserved</p>
    </div>
  </div>
</template>
<script >
  export default {}
 </script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}
.links {
    padding: 0 15px;
}
.links a {
  color:#fff;
  font-size: 18px;
  text-decoration: none;
}
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}
.links {
    padding: 0 15px;
}
.links a {
  color:#fff;
  font-size: 18px;
  text-decoration: none;
}
.main-footer {
    background-color: darkgrey;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p.footer-div {
    margin-bottom: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
