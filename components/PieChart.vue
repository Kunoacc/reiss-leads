
<script>
import { Doughnut, mixins, Pie } from "vue-chartjs"
const { reactiveProp } = mixins

export default {
    name: 'barChart',
    data(){
        return {
            chartdata: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#FC2525',
                    data: [40, 39, 10, 40, 39, 80, 40]
                    },{
                    label: 'Data Two',
                    backgroundColor: '#05CBE1',
                    data: [60, 55, 32, 10, 2, 12, 53]
                    }
                ]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false
            }
        }
    },
    extends: Doughnut,
    // mixins: [reactiveProp],
    // props: ['options'],
    mounted () {
        this.renderChart(this.chartData ,this.options)
    }
}
</script>

<style>

</style>
