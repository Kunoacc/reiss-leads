<template>
  <b-col cols="12" lg="3" class="d-flex flex-column mt-3 mt-lg-0 progress-card">
    <b-card :class="cardClass" class="border-0">
      <b-card-body>
        <b-row>
          <b-col cols="12" md="4" class="position-relative">
            <progress-bar
              :color="color"
              width="60"
              :font-size="fontSize"
              :pv="pv"
              bold="8"
              :text-bg-color="bgColor"
              :bg-color="bgColor"
            ></progress-bar>
          </b-col>
          <b-col cols="12" md="8" class="d-flex justify-content-center flex-column">
            <h4 class="font-weight-bold" :style="{color: color || 'var(--primary)'}">{{title}}</h4>
            <p class="text-sm">
              <slot></slot>
            </p>
          </b-col>
        </b-row>
      </b-card-body>
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
      fontSize: 14,
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
.dark-mode .progress-card .card-body {
  background: #1e3558;
  border: none;
}
</style>
