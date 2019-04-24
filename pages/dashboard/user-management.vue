<template>
  <div class="row my-5">
    <div class="col-12 mb-5">
      <div class="card card-body bg-secondary rounded-lg bg-0 p-0 border-0">
        <table class="table table-striped table-inverse col-12">
          <thead class="thead-inverse">
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(name, index) in names" :key="index">
              <td scope="row">{{name}}</td>
              <td>Amar</td>
              <td>Amarali@reissedwards.com</td>
              <td>2 mins ago</td>
              <td>
                <b-button @click="toggleModal" class="text-xs">Permissions</b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <data-table
                api-url="https://vuetable.ratiw.net/api/users"
                :fields="fields"
                :per-page="6"
                :data="data"
                :isSearchable="false"
                title="conversions per year"
                class="shadow-sm"
        ></data-table>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-management",
  data() {
    return {
      fields: [
        "id",
        { name: "name", title: "Full Name", sortField: "name" },
        { name: "direction" },
        { name: "type" },
        { name: "from", sortField: "from" },
        { name: "to", sortField: "to" },
        { name: "extension" }
      ],
      names: [
        "Car Winston",
        "John Trevor",
        "Susan Northwinter",
        "Issabel Sand",
        "Jemimah South"
      ]
    };
  },
  methods: {
      toggleModal() {
        this.$root.$emit('bv::toggle::modal', 'accessModal', '#btnToggle')
      }
  }
};
</script>

<style>

</style>
