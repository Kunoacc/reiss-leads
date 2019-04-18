<template>
    <b-row>
        <b-col :cols="cols || 12">
            <pie-chart></pie-chart>
        </b-col>
    </b-row>
</template>

<script>
import PieChart from "./PieChart";

export default {
    name: 'pie-card',
    props: ['cols'],
    components: {
        PieChart
    },
    data(){
        return {

        }
    },

}
</script>

<style>

</style>
