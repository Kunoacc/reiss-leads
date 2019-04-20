<template>
  <div class="filter-bar ml-auto col-12 px-0 py-4">
    <div class="form-inline d-flex flex-row justify-content-between px-4">
      <div class="form-group position-relative col-6 px-0">
        <fa icon="search" class="position-absolute icon" style="top: 11; z-index: 2; left: 30"></fa>
        <input
          type="text"
          v-model="filterText"
          class="rounded-xl form-control col-10 pl-5 mr-3"
          @keyup.enter="doFilter"
          placeholder="Search From, To, or Name"
        >
        <transition name="fade">
          <fa icon="times" class="position-absolute icon" style="top: 11; z-index: 2; right: 135" v-if="isResetable" @click="resetFilter"></fa>
        </transition>
        <!-- <button class="btn btn-primary rounded-circle" @click="doFilter">
          <fa icon="search"></fa>
        </button> -->
      </div>
      <button class="btn btn-primary rounded-xl">
        export csv
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: "",
      isResetable: false
    };
  },
  methods: {
    doFilter() {
      this.$events.$emit("filter-set", this.filterText);
    },
    resetFilter() {
      this.filterText = ""; // clear the text in text input
      this.$events.$emit("filter-reset");
    }
  },
  watch: {
    filterText(val){
      if (val.length > 0) {
        this.$events.$emit("filter-set", this.filterText);
        this.isResetable = true
      } else if (val.length < 1) {
        this.$events.$emit("filter-reset");
        this.isResetable = false
      }
    }
  }
};
</script>
<style>
.filter-bar {
  margin-bottom: 8px;
}
.form-control:focus{
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
.icon{
  color: #282A3C;
}

.form-control{
  background: #F5F5F5;
  color: #282A3C;
  transition: all 0.5s ease;
}
[data-icon=times]{
  cursor: pointer;
}
</style>