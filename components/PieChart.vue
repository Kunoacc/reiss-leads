
<script>
import { Doughnut, mixins, Pie, Bar } from "vue-chartjs"
const { reactiveProp } = mixins

export default {
    name: 'barChart',
    data(){
        return {
            chartdata: {
                labels: ['Calls', 'Enquiries from website', 'Others'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: ['#FF840A', '#1E3558', '#FFFFFF'],
                    borderWidth: 0,
                    data: [40000, 39500, 100000]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 20,
                        fontFamily: "'Roboto', sans-serif"
                    }
                },
                elements: {
                    center: {}
                }
            }
        }
    },
    extends: Doughnut,
    // mixins: [reactiveProp],
    props: ['title'],
    mounted () {
        this.options.elements.center = {
            text: `${this.title} leads`,
            color: '#efefef',
            fontStyle: "'Roboto', sans-serif",
            sidePadding: 20
        }
        // this.addPlugin({
        //     id: 'center',
        //     beforeInit: (chart) => {
        //         if (chart.config.options.elements.center) {
        //             //Get ctx from string
        //             var ctx = chart.chart.ctx;

        //             //Get options from the center object in options
        //             var centerConfig = chart.config.options.elements.center;
        //             var fontStyle = centerConfig.fontStyle || 'Arial';
        //             var txt = centerConfig.text;
        //             var color = centerConfig.color || '#000';
        //             var sidePadding = centerConfig.sidePadding || 20;
        //             var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //             //Start with a base font of 30px
        //             ctx.font = "30px " + fontStyle;

        //             //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        //             var stringWidth = ctx.measureText(txt).width;
        //             var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        //             // Find out how much the font can grow in width.
        //             var widthRatio = elementWidth / stringWidth;
        //             var newFontSize = Math.floor(30 * widthRatio);
        //             var elementHeight = (chart.innerRadius * 2);

        //             // Pick a new font size so it will not be larger than the height of label.
        //             var fontSizeToUse = Math.min(newFontSize, elementHeight);

        //             //Set font settings to draw it correctly.
        //             ctx.textAlign = 'center';
        //             ctx.textBaseline = 'middle';
        //             console.log(chart)
        //             var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        //             var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        //             ctx.font = fontSizeToUse + "px " + fontStyle;
        //             ctx.fillStyle = color;

        //             //Draw text in center
        //             ctx.fillText(txt, centerX, centerY);
        //         }
        //     }
        // })
        this.renderChart(this.chartdata ,this.options)
    }
}
</script>

<style>

</style>
