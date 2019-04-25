<template>
  <div class="wrapper d-flex w-100 align-content-stretch">
    <sidebar :style="{marginTop: '65px'}"></sidebar>
    <main :style="{marginTop: '65px'}">
      <navbar></navbar>
      <div class="content">
        <div class="container-fluid">
          <div class="px-4 my-5">
            <div class="row align-items-center justify-content-center">
              <div class="form-group mb-0 mr-0 mr-md-5 mb-3 mb-md-0 px-0">
                <select class="form-control rounded-xl text-xs border-secondary bg-white border mr-4 mx-0">
                  <option value="0" selected disabled>Filters</option>
                </select>
              </div>
              <div :class="['col-12 col-md-5 px-3 d-flex flex-row align-items-center rounded-full', {'shadow': $store.state.isThemeDark}]"
              :style="{boxShadow: (!$store.state.isThemeDark) ? '0 0.150rem 0.65rem rgba(0, 0, 0, 0.075) !important' : 'none'}">
                <span class="text-xs mr-3 col-4 px-0">Select your date Range</span>
                <datepicker input-class="form-control bg-white bordered-left pl-5 py-2"
                wrapper-class="position-relative text-secondary py-2 col px-0"
                calendar-class="shadow border-0 rounded-lg p-3 pb-5"
                placeholder="Start Date">
                  <div slot="beforeCalendarHeader" class="calender-header pb-2">
                    Date Range Picker
                  </div>
                  <span slot="afterDateInput" class="calender-header position-absolute positioned">
                    <fa icon="calendar"></fa>
                  </span>
                </datepicker>
                <datepicker input-class="form-control bg-white bordered-right pl-5 py-2"
                wrapper-class="position-relative text-secondary py-2 col px-0"
                calendar-class="shadow border-0 rounded-lg p-3 pb-5"
                placeholder="End Date">
                  <div slot="beforeCalendarHeader" class="calender-header pb-2">
                    Date Range Picker
                  </div>
                  <span slot="afterDateInput" class="calender-header position-absolute positioned">
                    <fa icon="calendar"></fa>
                  </span>
                </datepicker>
              </div>
            </div>
            <nuxt></nuxt>
          </div>
        </div>
      </div>
    </main>
    <modals></modals>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

import "@/assets/css/light.scss";
import sidebar from "@/components/sidebar.vue";
import navbar from "@/components/navbar.vue";
import modals from "@/components/modals.vue";
export default {
  name: "dashboard-wrapper",
  components: {
    sidebar,
    navbar,
    modals,
    Datepicker
  },
  mounted() {
    document.querySelector('.vdp-datepicker__calendar')
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
.vdp-datepicker__calendar{
  color: var(--primary);

  .cell{
    &.day{
      border: solid 1px #E8E9EC;
    }
    &.selected{
      color: white;
      background: var(--primary);
      border: var(--primary);
    }
    &.day-header{
    text-transform: uppercase;
    background: #E9E9F0;
    color: #A3A6B4;
    font-weight: bold;
    margin-top: 10px;

    &:hover{
      background: #E9E9F0;
    }
  }
  }

  .prev, .next{
    border: solid 1px #E8E9EC;
    border-radius: 4px;
    margin-bottom: 2px;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  .up{
    font-weight: bold;
  }
}
.positioned{
  top: 10px;
  left: 10px;
}

.rounded-full{
  border-radius: 2rem;
}
.bordered{
  &-left{
    border-width: 0px 1px 0px 0px;
    border-radius: 0px;
  }
  &-right{
    border-width: 0px 0px 0px 1px;
    border-radius: 0px;
  }
}
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
.dark-mode *[class*="white"]:not(.text-white) {
  background: transparent !important;
}

.dark-mode .border-secondary{
  border-color: #292d39 !important;
}

.dark-mode input.form-control {
  background: #181c28;
  color: #7882a2;
  border: #181c28;
}
</style>
