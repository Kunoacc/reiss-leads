
<script>
import { Doughnut, mixins, Pie } from "vue-chartjs"
const { reactiveProp } = mixins

export default {
    name: 'barChart',
    extends: Doughnut,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        this.renderChart(this.chartData ,this.options)
    }
}
</script>

<style>

</style>
