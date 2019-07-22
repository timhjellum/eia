var ID = $('#dally'); // single-word, case sensitive, no spaces or special characters

function dallyUpdate() {
    var enlargedWidth = ID.attr("data-enlarged-width")
    var enlargedHeight = ID.attr("data-enlarged-height")
    console.log("update chart width: " + enlargedWidth + ", and height:" + enlargedHeight)
    Dally.update({
        chart: {
            width: enlargedWidth,
            height: enlargedHeight
        },
    });
};

function dallyReset() {
    var defaultWidth = ID.attr("data-width")
    var defaultHeight = ID.attr("data-height")
    console.log("update chart width: " + defaultWidth + ", and height:" + defaultHeight)
    Dally.update({
        chart: {
            width: defaultWidth,
            height: defaultHeight
        },
    });
};

var Dally = Highcharts.chart('chart-dally-inner-container', {
    chart: {
        width: 500,
        height: 400
    },
    title: {
        text: 'Dally Example'
    },
    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
});