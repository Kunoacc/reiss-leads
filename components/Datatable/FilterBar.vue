<template>
  <div class="filter-bar ml-auto col-12 px-0 py-2">
    <div class="form-inline d-flex flex-row justify-content-between px-2 ">
      <div class="form-group position-relative col-6 px-0">
        <fa icon="search" class="position-absolute icon" style="top: 7; z-index: 2; left: 15"></fa>
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
      <div class="row mx-0">
        <div class="form-group">
        <select class="form-control rounded-xl text-xs border-primary border mr-4 mx-0">
          <option value="0" selected disabled>Filters</option>
        </select>
      </div>
      <button class="btn btn-primary rounded-xl export-button text-xs btn-sm px-3">
        Export csv
      </button>
      </div>
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

.export-button{
  transition: all 0.3s ease;
}

.export-button:hover{
  transform: scale(1.1);
}

.filter-bar input.form-control{
  font-size: 0.6rem !important;
}
</style>