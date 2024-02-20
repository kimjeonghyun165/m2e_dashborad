import { formatTotalKrwPrice } from "@/utils/utils"

const ChartOptions = {
    colors: ["#84849e", "#0bd6b3", "#af04f9", "#ff9715", "#ff003d"],
    chart: {
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: true
        },

    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "50%",
            dataLabels: {
                total: {
                    enabled: true,
                    formatter: function (_val: any, opt: any) {
                        let series = opt.w.config.series
                        let idx = opt.dataPointIndex
                        const total = series.reduce((total: any, self: any) => total + self.data[idx], 0)
                        return formatTotalKrwPrice(total)
                    },
                    style: {
                        fontSize: '10px',
                        fontWeight: 900
                    }
                }
            }
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        hideEmptySeries: true,
        style: {
            fontFamily: "Inter, sans-serif",
        },
    },
    grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: -14
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        floating: false,
        labels: {
            show: true,
            style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
    },
    yaxis: {
        show: false
    },
    fill: {
        opacity: 1,
    },

}


export default ChartOptions;
