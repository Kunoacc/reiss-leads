
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
                    backgroundColor: ['#FF840A', '#1E3558', '#4C84FF'],
                    borderWidth: 0,
                    data: [40000, 39500, 100000]
                    }
                ],
                weight: 0.5
            },
            options: {
                legendCallback: (chart) => {
                    var text = [];
                    text.push('<ul class="' + chart.id + '-legend list-unstyled">');
                    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                        text.push('<li><span class="d-flex flex-row align-items-center">');

                            if (chart.data.labels[i]) {
                                text.push(`<div class="pie-doughnut my-2 mr-3"
                                style="background: radial-gradient(circle, transparent 40%, ${chart.data.datasets[0].backgroundColor[i]} 40%);"></div>`)
                                text.push(`<p class="mb-0 text-xs d-flex flex-row justify-content-between flex-fill">
                                    <span>${chart.data.labels[i]}</span>
                                    <span style="color: #0F0F0F">${Math.round((chart.data.datasets[0].data[i]/chart.data.datasets[0].data.reduce((a,b) => a + b, 0)) * 100)}%</span>
                                </p>`);
                            }
                        text.push('</span></li>');
                    }
                    text.push('</ul>');
                    return text.join("");
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 20,
                        fontFamily: "'Roboto', sans-serif",
                        usePointStyle: true
                    },
                    display: false
                },
                elements: {
                    center: {}
                },
                cutoutPercentage: 60
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
.pie-doughnut {
    border-radius: 100%;
    height: 20px;
    width: 20px;
}
</style>
