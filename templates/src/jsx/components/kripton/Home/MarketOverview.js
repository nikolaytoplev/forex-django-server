import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Buy",
          data: [
            {
              x: "2:00",
              y: [9200.0, 9600.0],
            },
            {
              x: "2:30",
              y: [9300.0, 9600.0],
            },
            {
              x: "3:00",
              y: [9150.0, 9500.0],
            },
            {
              x: "3:30",
              y: [9300.0, 9700.0],
            },
            {
              x: "4:00",
              y: [9200.0, 9600.0],
            },
            {
              x: "4:30",
              y: [9400.0, 9700.0],
            },
            {
              x: "5:00",
              y: [9400.0, 9600.0],
            },
            {
              x: "5:30",
              y: [9300.0, 9600.0],
            },
            {
              x: "6:00",
              y: [9300.0, 9500.0],
            },
            {
              x: "6:30",
              y: [9200.0, 9500.0],
            },
            {
              x: "7:00",
              y: [9450.0, 9650.0],
            },
            {
              x: "7:30",
              y: [9400.0, 9700.0],
            },
            {
              x: "8:00",
              y: [9300.0, 9700.0],
            },
          ],
        },
        {
          name: "Sell",
          data: [
            {
              x: "2:00",
              y: [9370.0, 9550.0],
            },
            {
              x: "2:30",
              y: [9350.0, 9700.5],
            },
            {
              x: "3:00",
              y: [9275.0, 9482.0],
            },
            {
              x: "3:30",
              y: [9200.0, 9600.0],
            },
            {
              x: "4:00",
              y: [9250.0, 9500.0],
            },
            {
              x: "4:30",
              y: [9445.0, 9523.0],
            },
            {
              x: "5:00",
              y: [9440.0, 9667.0],
            },
            {
              x: "5:30",
              y: [9300.0, 9600.0],
            },
            {
              x: "6:00",
              y: [9445.0, 9648.0],
            },
            {
              x: "6:30",
              y: [9240.0, 9700.0],
            },
            {
              x: "7:00",
              y: [9130.0, 9550.0],
            },
            {
              x: "7:30",
              y: [9340.0, 9440.0],
            },
            {
              x: "8:00",
              y: [9560.0, 9740.0],
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "rangeBar",
          height: 370,

          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            startingShape: "rounded",
          },
        },
        colors: ["#61C277", "#FF3E3E"],
        dataLabels: {
          enabled: false,
        },
        markers: {
          shape: "circle",
        },
        legend: {
          show: false,
          fontSize: "12px",
          labels: {
            colors: "#000000",
          },
          markers: {
            width: 18,
            height: 18,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
          },
        },
        stroke: {
          show: true,
          width: 6,
          colors: ["transparent"],
        },
        grid: {
          borderColor: "#eee",
          strokeDashArray: 8,
        },
        xaxis: {
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            offsetX: 0,
            style: {
              colors: "#787878",
              fontSize: "12px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          opacity: 1,
          colors: ["#61C277", "#FF3E3E"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
        responsive: [
          {
            breakpoint: 575,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "40%",
                },
              },
              chart: {
                height: 250,
              },
              xaxis: {
                labels: {
                  style: {
                    fontSize: "10px",
                  },
                },
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart" class="bar-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="rangeBar"
          height={370}
        />
      </div>
    );
  }
}

export default MarketOverview;
