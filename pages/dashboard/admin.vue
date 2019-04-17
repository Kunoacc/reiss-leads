<template>
    <b-row class="my-5">
        <b-col cols="12" class="mb-5">
            <b-card class="bg-secondary rounded-lg border-0">
                <data-table
                    api-url="https://vuetable.ratiw.net/api/users"
                    :fields="fields"
                    :per-page="10"
                    :data="data"
                ></data-table>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import { sss } from "@/components/Datatable/Data.js"

export default {
    name: 'dashboard-admin',
    data() {
        return {
            fields: ['id',
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
    },
    methods: {
        populateData(){
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(sss)
                }, 3000)
            })
        }
    },
    async mounted(){
        const data  = await this.populateData()
        this.data = data
    },
    watch: {
        data(newVal, oldVal){
            this.$events.$emit('data-loaded', newVal)
            // return this.$refs.vuetable.refresh()
        }
    }
}
</script>

<style scoped>
.card-body{
    padding: 0;
}
</style>
