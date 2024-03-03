import { formatTotalKrwPrice } from "@/utils/utils";
import { ApexOptions } from "apexcharts";

export const ChartOptions: ApexOptions = {
    colors: ["#84849e", "#0bd6b3", "#af04f9", "#ff9715", "#ff003d"],
    chart: {
        zoom: {
            autoScaleYaxis: true
        },
        fontFamily: "Inter, sans-serif",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "80%",
            borderRadius: 8,
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        style: {
            fontFamily: "Inter, sans-serif",
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 2
    },
    grid: {
        show: true,
        strokeDashArray: 5,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        type: 'datetime',
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
        show: true,
        floating: false,
        labels: {
            show: true,
            align: 'right',
            minWidth: 30,
            maxWidth: 50,
            formatter: (value: number) => {
                return formatTotalKrwPrice(value)
            },

        },
        axisBorder: {
            show: true,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: true,
            color: '#78909C',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
    noData: {
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            color: undefined,
            fontSize: '20px',
            fontFamily: undefined
        }
    },

    fill: {

        opacity: 1,
    },

};