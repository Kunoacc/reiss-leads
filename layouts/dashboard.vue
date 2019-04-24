<template>
  <div class="wrapper d-flex w-100 align-content-stretch">
    <sidebar :style="{marginTop: '65px'}"></sidebar>
    <main :style="{marginTop: '65px'}">
      <navbar></navbar>
      <div class="content">
        <div class="container-fluid">
          <div class="px-4">
            <nuxt></nuxt>
          </div>
        </div>
      </div>
    </main>
    <modals></modals>
  </div>
</template>

<script>
import "@/assets/css/light.scss";
import sidebar from "@/components/sidebar.vue";
import navbar from "@/components/navbar.vue";
import modals from "@/components/modals.vue";
export default {
  name: "dashboard-wrapper",
  components: {
    sidebar,
    navbar,
    modals
  },
  mounted() {
    let sidebar = document.querySelector('.sidebar')
    let main = document.querySelector('main')
    this.$root.$on('bv::show::modal', () => {
      sidebar.classList.add('blur')
      main.classList.add('blur')
    })
    this.$root.$on('bv::modal::hide', () => {
      sidebar.classList.remove('blur')
      main.classList.remove('blur')
    })
    this.$root.$on('bv::toggle::modal', () => {
      if(sidebar.classList.contains('modal-open') && main.classList.contains('modal-open')){
        sidebar.classList.remove('blur')
        main.classList.remove('blur')
      } else {
        sidebar.classList.add('blur')
        main.classList.add('blur')
      }
    })
  },
  computed: {
    isThemeDark() {
      return this.$store.state.isThemeDark;
    },
    bodyClass() {
    }
  },
  watch: {}
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
  transition: all 0.25s ease;
  width: 100%;
}
.dark-mode {
  background: #181c28;
}
.dark-mode *[class*="secondary"]:not(.text-secondary) {
  background: #292d39 !important;
}

.dark-mode input.form-control {
  background: #181c28;
  color: #7882a2;
  border: #181c28;
}
</style>
