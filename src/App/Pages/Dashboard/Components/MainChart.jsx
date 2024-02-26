import React from 'react';
import ReactApexChart from 'react-apexcharts';

const defaultColor = '#EBEBEB';
const clickedColor = '#1985D2';

class MainChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30, 24, 10, 24, 12],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        colors: [
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          defaultColor,
          clickedColor,
          defaultColor,
          defaultColor,
        ],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
            borderRadius: {
              topLeft: 12,
              topRight: 12,
              bottomRight: 12,
              bottomLeft: 12,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          labels: {
            style: {
              fontSize: '12px',
            },
          },
          grid: {
            show: false, // Remove the background line
          },
        },
        events: {
          dataPointSelection: (event, chartContext, config) => {
            const clickedIndex = config.dataPointIndex;
            const newColors = this.state.series[0].data.map((_, index) => {
              return index === clickedIndex ? clickedColor : defaultColor;
            });
            this.setState({
              options: {
                ...this.state.options,
                colors: [newColors],
              },
            });
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id='chart'>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type='bar'
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default MainChart;
