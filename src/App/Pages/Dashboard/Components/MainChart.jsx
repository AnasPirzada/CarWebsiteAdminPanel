import React from 'react';
import ReactApexChart from 'react-apexcharts';

const defaultColor = '#EBEBEB';
const clickedColor = '#1985D2';

class MainChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: 'Monthly', // Default selected year
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

  handleYearChange = (event) => {
    const selectedYear = event.target.value;
    // Here you can fetch data for the selected year and update the series accordingly
    // For now, let's just set a placeholder data
    const newData = this.getDummyDataForYear(selectedYear);
    this.setState({
      selectedYear,
      series: [{ data: newData }],
    });
  };

  // Placeholder function to get dummy data for the selected year
  getDummyDataForYear = (selectedYear) => {
    // You can implement logic here to fetch data for the selected year
    // For demonstration, let's return random data for each month
    const randomData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 50));
    return randomData;
  };

  render() {
    return (
      <div>
        <div id='chart'>
          <div className='d-flex justify-content-between align-items-center'>
            <p
              style={{
                color: '#1F1F1F',
                fontSize: '24px',
                fontWeight: '700',
              }}
            >
              Total Number of sale
            </p>

            <select
              className='w-25 p-2  rounded-3 border-0'
              style={{ backgroundColor: '#F5F5F5', color: '#1F1F1F' }}
              onChange={this.handleYearChange}
              value={this.state.selectedYear}
            >
              <option value='Monthly'>Monthly</option>
              <option value='Jan'>Jan</option>
              <option value='Feb'>Feb</option>
              <option value='Mar'>Mar</option>
              <option value='Apr'>April</option>
            </select>
          </div>
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
