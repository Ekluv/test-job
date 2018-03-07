/**
 * Using the attached data, create a chart in JavaScript which shows a trend over time of the
 * percentage of responses for that day which have a value of “yes” for the “answer” column.
 */


function getData(url) {
  return fetch(url)
    .then(response => response.text());
}

function calculatePercentage(data) {
  const percentageData = Object.assign(data);
  Object.keys(percentageData)
    .map((date) => {
      const { totalAnswers, yes } = percentageData[date];
      const percentage = Math.ceil((yes / totalAnswers) * 100);
      percentageData[date] = percentage;
    });
  return percentageData;
}

function parseData(csvData) {
  const rows = csvData.split(/\r?\n|\r/).splice(1);
  rows.pop();
  const data = {};
  const CHOICES = {
    YES: 'yes',
    NO: 'no',
  };
  rows.map((row) => {
    const [date, _, answer] = row.split(';');
    if (!data[date]) {
      data[date] = {
        totalAnswers: 0,
        yes: 0,
      }
    }
    if (answer === CHOICES.YES) {
      data[date][CHOICES.YES] += 1;
    }
    data[date].totalAnswers += 1;
  });
  const calculatedData = calculatePercentage(data);
  renderChart(calculatedData);
}

function renderChart(data) {
  Highcharts.chart('container', {
    title: {
      text: 'Percentage Data'
    },
    yAxis: {
      title: {
        text: 'Percentage %'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    xAxis: {
      categories: Object.keys(data),
    },
    plotOptions: {
      line: {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Yes',
      data: Object.values(data),
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
});
}


getData('./data.csv')
  .then(parseData)
