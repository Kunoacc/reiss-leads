<template>
  <b-col cols="12" md="6" lg="3" class="d-flex flex-column mt-3 mt-lg-0 progress-card">
    <b-card :class="[cardClass, 'px-0 py-0']" class="border-0" body-class="d-flex align-items-center">
      <b-row class="flex-fill justify-content-between">
          <b-col cols="12" xl="5" class="position-relative d-flex d-xl-block justify-content-center">
            <progress-bar
              :color="color"
              width="50"
              :font-size="fontSize"
              :pv="pv"
              bold="6"
              :text-bg-color="bgColor"
              :bg-color="bgColor"
            ></progress-bar>
          </b-col>
          <b-col cols="12" xl="7" class="d-flex justify-content-center flex-column mt-3 mt-xl-0 text-center text-xl-left">
            <h5 class="font-weight-medium" :style="{color: color || 'var(--primary)'}">{{title}}</h5>
            <p class="text-xs mb-0">
              <slot></slot>
            </p>
          </b-col>
        </b-row>
    </b-card>
  </b-col>
</template>

<script>
import Progress from "./Progress";

export default {
  name: "progress-card",
  components: {
    ProgressBar: Progress
  },
  props: ["width", "options", "title", "cardClass", "progress", "color"],
  data() {
    return {
      fontSize: 10,
      bgColor: ""
    };
  },
  mounted() {
    if (this.$store.state.isThemeDark) {
      this.bgColor = "#1E3558";
    } else {
      this.bgColor = "#FAFAFA";
    }
  },
  computed: {
    pv() {
      return this.progress;
    },
    isThemeDark() {
      return this.$store.state.isThemeDark;
    },
    mediaSize(){
      return window.innerWidth
    }
  },
  watch: {
    isThemeDark(val) {
      if (val) {
        this.bgColor = "#1E3558";
      } else {
        this.bgColor = "#FAFAFA";
      }
    }
  }
};
</script>

<style>
.progress-card .text-xs{
  font-size: 0.6rem !important;
}
.dark-mode .progress-card .card-body {
  background: #1e3558;
  border: none;
}
.dark-mode .progress-card .card {
  background: #1e3558;
  border: none;
}
</style>
