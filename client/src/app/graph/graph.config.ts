export const config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Retail',
            backgroundColor: "rgba(220,220,220,0.5)",
            borderColor: "rgba(220,220,220,0.5)",
            data: [],
            fill: false,
        }, {
            label: 'Wholesale',
            fill: false,
            backgroundColor: "rgba(220,220,220,0.8)",
            borderColor: "rgba(220,220,220,0.8)",
            data: [],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Sales'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
