'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import highcharts from 'highcharts';

class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = undefined;
    this.state = {data: props.data};
  }

  componentDidMount() {
    console.log('from chircle chart', this.state);
    this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
      credits: {
        enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            enabled: false
          }
        }
      },
      chart: {
        type: 'pie',
        fontfamily: "Helvetica",
        color: "white",
        backgroundColor: null
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: this.props.title,
        y: 10,
        style : {
          fontSize: "25px",
          color: "white",
          letterSpacing: "1px"
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y;
        }
      },
      series: [{
        name: 'Calories',
        data: this.props.data,
        size: '100%',
        innerSize: '75%',
        showInLegend:false,
        dataLabels: {
          enabled: false
        }
      }]
    });

  }
  
  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(props.data);
  }
  
  render() {
    return (
      <div ref='chart' className="circle">
      </div>
    )
  }
}

export default CircleChart
