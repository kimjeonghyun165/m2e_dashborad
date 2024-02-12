import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


const ChartOptions: ApexOptions = {
    colors: ["#84849e", "#0bd6b3", "#af04f9", "#ff9715", "#ff003d"],
    chart: {
        animations: {
            enabled: true,
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    stroke: {
        colors: ["transparent"],
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontFamily: "Inter, sans-serif",
                        offsetY: 10,
                    },
                    total: {
                        showAlways: false,
                        show: true,
                        label: "Total Count",
                        fontFamily: "Inter, sans-serif",
                        formatter: function (w: any) {
                            const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
                                return a + b;
                            }, 0);
                            return `${sum} 회`;
                        },
                    },
                    value: {
                        show: true,
                        fontFamily: "Inter, sans-serif",
                        offsetY: -20,
                        formatter: function (value: any) {
                            return value + " 회";
                        },
                    },
                },
                size: "70%",
            },
        },
    },
    grid: {
        padding: {
            top: 2,
        },
    },
    labels: ["Noraml", "Rare", "Epic", "Unique", "Legendary"],
    dataLabels: {
        enabled: true,
    },
    legend: {
        show: true,
        position: 'bottom',
        fontFamily: "Inter, sans-serif",

    },
    yaxis: {
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
};

export default ChartOptions