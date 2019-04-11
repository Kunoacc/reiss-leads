<template>
  <section class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-5 bg-login d-none d-lg-block" :style="{backgroundImage: `url(${bannerImg})`}"></div>
        <div class="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center">
          <div class="row mx-auto text-center">
            <div class="col-12"><img :src="logo" width="200" alt="" srcset=""></div>
            <div class="col-8 mx-auto text-dark">
              <h1 class="py-3 h1 font-weight-bold text-left">Login</h1>
            </div>
            <div class="col-8 mx-auto my-3">
              <b-form-input type="text" id="username" placeholder="username" size="lg" class="font-weight-light" autocomplete="false"></b-form-input>
            </div>
            <div class="col-8 mx-auto my-3">
              <b-form-input type="password" id="username" placeholder="password" size="lg" class="font-weight-light" autocomplete="false"></b-form-input>
            </div>
            <div class="col-8 mx-auto my-3 text-center text-lg-right">
                <button class="btn btn-primary font-weight-light px-5 py-2">login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'index',
  data(){
    return {
      loading: false
    }
  },
  components: {
    Logo
  },
  methods: {
    login(){
      
    }
  },
  computed: {
    bannerImg(){
      return require('../assets/img/login-bg.svg')
    },
    logo(){
      return require('../assets/img/logo-dark.svg')
    }
  }
}
</script>

<style scoped>
section{
  height: 100vh;
}

.container, .container > .row, .container > .row > .col-6{
  height: 100%;
}

.bg-login{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.form-control{
  background: var(--light);
  border: solid 0 transparent;
}

.form-control::placeholder{
  font-weight: 300;
}

.btn-primary{
  background: #1e3558e6;
  border: solid 1px #1e3558e6;
}

</style>
