<template>
    <b-card :class="['bg-white pie-card mt-4 mt-lg-0', {'shadow': $store.state.isThemeDark}]">
        <b-row>
            <b-col cols="12 mb-4">
                <h6 class="text-capitalize pie-card-text">
                    {{title}}
                </h6>
            </b-col>
            <b-col :cols="cols || 12" class="height">
                <pie-chart :chart-data="data" :options="options" :title="chartTitle" :styles="myStyles"></pie-chart>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import PieChart from "./PieChart";

export default {
    name: 'pie-card',
    props: ['cols', 'data', 'options', 'title', 'chartTitle'],
    components: {
        PieChart
    },
    computed: {
        myStyles: () => ({
            height: '250px',
            position: 'relative'
        })
    }
}
</script>

<style>
.dark-mode .pie-card-text{
    color: white;
}

.dark-mode .pie-card{
    background: transparent !important;
}

.height{
    max-height: 250px;
}
</style>
