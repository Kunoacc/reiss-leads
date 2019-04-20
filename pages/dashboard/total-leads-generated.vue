<template>
     <div class="row my-5">
         <dashboard-card title="summary">
            <b-col cols="12" class="py-4 px-0">
                <b-row>
                    <div class="col-12 col-lg-6">
                        <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                    </div>
                    <div class="col-12 col-lg-6">
                        <pie-card title="total amount converted" chart-title="5000 leads"></pie-card>
                    </div>
                </b-row>
            </b-col>
            <b-col cols="12" class="py-4 px-0">
                <b-row>
                    <div class="col-12 col-lg-6">
                        <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                    </div>
                    <div class="col-12 col-lg-6">
                        <pie-card title="total amount converted" chart-title="5000 leads"></pie-card>
                    </div>
                </b-row>
            </b-col>
         </dashboard-card>

         <dashboard-card title="all leads">
             <div class="row">
                 <div class="col-12">
                     <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                 </div>
                 <div class="col-12 col-lg-6 my-5">
                     <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                 </div>
             </div>
         </dashboard-card>

         <dashboard-card title="pipeline by source">
             <div class="row">
                 <div class="col-12 col-lg-6">
                     <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                 </div>
                 <div class="col-12 col-lg-6">
                     <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                 </div>
                 <div class="col-12 my-5">
                     <data-table
                            api-url="https://vuetable.ratiw.net/api/users"
                            :fields="fields"
                            :per-page="6"
                            :data="data"
                            :isSearchable="false"
                            :class="['rounded', {'shadow': $store.state.isThemeDark}]"
                        ></data-table>
                 </div>
             </div>
         </dashboard-card>
     </div>
</template>

<script>
export default {
    name: 'total-leads-generated',
    data(){
        return {
            fields: [
                'id',
                {name: 'name', title: 'Full Name', sortField: 'name'},
                {name: 'direction'},
                {name: 'type'},
                {name: 'from', sortField: 'from'},
                {name: 'to', sortField: 'to'},
                {name: 'extension'},
                // 'actions'
            ],
            data: {}
        }
    }
}
</script>

<style>

</style>
