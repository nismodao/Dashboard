'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import highcharts from 'highcharts';

class CircleChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = undefined;
  }

  componentDidMount() {
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
        type: 'pie'
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: this.props.title
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
        }
      },
      series: [{
        name: 'Calories',
        data: this.props.data,
        size: '100%',
        innerSize: '85%',
        showInLegend:true,
        dataLabels: {
          enabled: true
        }
      }]
    });
  }
  
  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(props.data);
  }
  
  render() {
    return (
      <div ref='chart'>
      </div>
    )
  }
}

export default CircleChart
