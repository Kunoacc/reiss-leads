<template>
    <b-card :class="['bg-transparent', {'shadow': $store.state.isThemeDark}]">
        <b-row>
            <b-col cols="12 mb-4">
                <h5 class="text-capitalize pie-card-text">
                    {{title}}
                </h5>
            </b-col>
            <b-col :cols="cols || 12">
                <pie-chart :chart-data="data" :options="options" :title="chartTitle"></pie-chart>
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
    }
}
</script>

<style>
.dark-mode .pie-card-text{
    color: white;
}
</style>
