<template>
    <div class="row my-5">
        <div class="col-12 mb-5">
            <div class="card card-body bg-secondary rounded-lg bg-0 p-0 border-0">
                <data-table
                api-url="https://vuetable.ratiw.net/api/users"
                :fields="fields"
                :per-page="6"
                :data="data"
                :isSearchable="false"
                title="conversions per year"
                class="shadow-sm"
                ></data-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'incentives',
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
            ]
        }
    }
}
</script>

<style>

</style>
