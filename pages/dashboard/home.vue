<template>
    <div class="row my-5">
        <b-col cols="12 mb-5">
            <b-card class="card-body bg-secondary rounded-lg border-0">
                <h5>Overview</h5>
                    <b-col cols="12" class="py-4 px-0">
                        <b-row>
                            <progress-card color="#000000" :title="500" progress="99" card-class="shadow">
                                Total Leads Generated
                            </progress-card>
                            <progress-card color="#000000" :title="300" progress="49" card-class="shadow">
                                Total Viable Leads
                            </progress-card>
                            <progress-card color="#000000" :title="150" progress="75" card-class="shadow">
                                Total Calls
                            </progress-card>
                            <progress-card color="#000000" :title="50" progress="53" card-class="shadow">
                                Total Web Enquiries
                            </progress-card>
                        </b-row>
                    </b-col>
            </b-card>
        </b-col>

        <div class="col-12 mb-5">
            <b-card class="card-body bg-secondary rounded-lg border-0">
                <h5>Figures</h5>
                <div class="row py-4">
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
                </div>
            </b-card>
        </div>

        <div class="col-12 mb-5">
            <b-card class="card-body bg-secondary rounded-lg border-0">
                <h5>Lead Management Overview</h5>
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
                <div class="row py-4">
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
            </b-card>
        </div>
    </div>
</template>

<script>
import ProgressCard from "../../components/ProgressCard.vue"
import FigureCard from "../../components/FigureCard.vue"
export default {
    name: 'dashboard-home',
    layout: 'dashboard',
    components: {
        ProgressCard, FigureCard
    },
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
