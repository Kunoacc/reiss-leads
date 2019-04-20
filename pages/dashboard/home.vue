<template>
    <div class="row my-5">
        <dashboard-card title="overview">
            <progress-card color="#000000" :title="500" progress="35" card-class="shadow">
                Total Leads Generated
            </progress-card>
            <progress-card color="#3FB485" :title="300" progress="20" card-class="shadow">
                Total Viable Leads
            </progress-card>
            <progress-card color="#FF840A" :title="150" progress="75" card-class="shadow">
                Total Calls
            </progress-card>
            <progress-card color="#66C8D4" :title="50" progress="53" card-class="shadow">
                Total Web Enquiries
            </progress-card>
        </dashboard-card>

        <dashboard-card title="figures">
            <figure-card title="$20,000">
                total leads generated
            </figure-card>
            <figure-card title="100/300">
                Total Covered Leads
            </figure-card>
            <figure-card :title="'25%'">
                Conversion Rate
            </figure-card>
            <figure-card title="$10,000">
                Amount Converted
            </figure-card>
        </dashboard-card>

        <dashboard-card title="lead management overview">
            <div class="row py-4 align-content-stretch align-items-stretch flex-fill">
                <figure-card title="0">
                    Leads with no follow up
                </figure-card>
                <figure-card title="0">
                    Total Scheduled Calls
                </figure-card>
                <figure-card :title="'0'">
                    Scheduled Calls Held vs Not Held
                </figure-card>
                <figure-card title="0">
                    Average Lead Time
                </figure-card>
            </div>
            <div class="row py-4 flex-fill px-0">
                <figure-card title="0" class="h-100">
                    Rules
                </figure-card>
                <figure-card title="0" class="h-100">
                    Incentives
                </figure-card>
                <figure-card title="0" class="ml-auto">
                    Amount Converted
                </figure-card>
            </div>
        </dashboard-card>
    </div>
</template>

<script>
import ProgressCard from "@/components/ProgressCard.vue"
import FigureCard from "@/components/FigureCard.vue"
export default {
    name: 'dashboard-home',
    layout: 'dashboard',
    mounted(){

    },
    data(){
        return {
            chart:{
                data:[]
            }
        }
    },
    methods: {

    }
}
</script>
