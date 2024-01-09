var age = []
for (i = 0; i < 9; i++) {
    age.push(20 + i * 2.5)
}
age.push(50)
age.push(60)
age.push(62.5)
age.push(65)
var employer = age.map((e) => {
    return e * 1.3 - 4
})
var employee = age.map((e) => {
    return e * 1.8 - 4
})
var TotalInterest = age.map((e) => {
    return e * 2.3 - 10
})
var data = {
    labels: age,
    datasets: [{
        label: 'Empolyer:',
        data: employer,
        backgroundColor: '#0800a3',
        // borderColor: 'rgba(75, 192, 192, 1)',
        // borderWidth: 1
    },
    {
        label: 'Empolyee:',
        data: employee,
        backgroundColor: '#4935ff',
        // borderColor: 'rgba(75, 192, 192, 1)',
        // borderWidth: 1
    },
    {
        label: 'Total Interest:',
        data: TotalInterest,
        backgroundColor: '#85afff',
        // borderColor: 'rgba(25, 192, 192, 1)',
        // borderWidth: 1
    }
    ]
};

// Chart configuration
var options = {
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false
            },
            ticks: {
                maxTicksLimit: age.length / 2
            },
            border: {
                display: false

            },
        },
        y:
        {
            min: 0,
            max: 400,
            stepSize: 100,
            stacked: true,
            grid: {
                drawTicks: false
            },
            ticks: {

                callback: function (value, index, ticks) {
                    if (value % 100 == 0 && value != 400)
                        return '$' + value;
                }
            },

            border: {
                display: false,
                dash: [3, 6]
            },


        }
    },
    plugins: {

        legend: {
            labels:
            {
                boxWidth: 18,
                boxHeight: 10,
                useBorderRadius: true,
                borderRadius: 5
            },
            title: {
                text: 'good'
            }
        },
        events: ['afterDraw'], // Enable the afterDraw event
        afterDraw: function (chart, easing, options) {
            var ctx = chart.ctx;
            // var x = chart.scales['x'].getPixelForTick(age.length - 1);
            // var y = chart.scales['y'].getPixelForValue(200);
            var markerSize = 10;
            var x = 5
            var y = 10
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x - markerSize / 2, y - markerSize);
            ctx.lineTo(x + markerSize / 2, y - markerSize);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.fillStyle = 'red'; // Marker color
            ctx.fill();
            ctx.restore();
        },

    }
}


// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});