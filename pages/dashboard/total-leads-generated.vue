<template>
     <div class="row my-5">
        <b-col cols="12 mb-5">
            <b-card class="card-body bg-secondary rounded-lg border-0">
                <h5>Summary</h5>
                    <b-col cols="12" class="py-4 px-0">
                        <b-row>
                            <div class="col-12 col-md-6">
                                <data-table
                                    api-url="https://vuetable.ratiw.net/api/users"
                                    :fields="fields"
                                    :per-page="6"
                                    :data="data"
                                    :isSearchable="false"
                                    title="Converted Leads"
                                ></data-table>
                            </div>
                            <div class="col-12 col-md-6">
                                
                            </div>
                        </b-row>
                    </b-col>
            </b-card>
        </b-col>
     </div>
</template>

<script>
export default {
    name: 'total-leads-generated',
    data(){
        return {

        }
    }
}
</script>

<style>

</style>
