'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import highcharts from 'highcharts';
import CircleChart from './components/CircleChart';
import Template from './components/template';

const mountNode = document.getElementById('root');

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [{circleDataA: [{name: "A",y: 0.1}, {name: "Total", y: 0.9}],
        circleDataB: [{name: "B",y: 0.8}, {name: "Total", y: 0.2}],
        circleDataC: [{name: "C",y: 0.3}, {name: "Total", y: 0.7}],
        calorieData: [{name: "Calories Out",y: .8}, {name: "Calories In", y: 0.2}],
        dayData: "Day 1",
        weightData: "150 lb"},
        {circleData: [{name: "A",y: 0.1}, {name: "Total", y: 0.9}],
        calorieData: [{name: "Calories Out",y: .8}, {name: "Calories In", y: 0.2}],
        dayData: "Day 2",
        weightData: "180 lb"},
        {circleData: [{name: "A",y: 0.1}, {name: "Total", y: 0.9}],
        calorieData: [{name: "Calories Out",y: .8}, {name: "Calories In", y: 0.2}],
        dayData: "Day 3",
        weightData: "160 lb"}
        ],
        index: 0
      }
    this.updateBack = this.updateBack.bind(this);
    this.updateForward = this.updateForward.bind(this);
  }
  componentDidmount () {

  }

  updateBack () {
    let index = this.state.index;
    index = index === 0 ? 2 : --index; 
    this.setState({index: index});
  }
  updateForward () {
    let index = this.state.index;
    index = index === 2 ? 0 : ++index; 
    this.setState({index: index});
  }
  render() {
    console.log(this.state);
    return (
     <div>
     <button onClick={()=>{this.updateBack()}}>backward</button>
     <button onClick={()=>{this.updateForward()}}>forward</button> 
     <Template day={this.state.data[this.state.index].dayData} weight={this.state.data[this.state.index].weightData} />
     <CircleChart data={this.state.data[this.state.index].circleDataA} 
     title={this.state.data[this.state.index].circleDataA[0].name} />
     <CircleChart data={this.state.data[this.state.index].circleDataB}
     title={this.state.data[this.state.index].circleDataB[0].name} />
     <CircleChart data={this.state.data[this.state.index].circleDataC}
     title={this.state.data[this.state.index].circleDataC[0].name} />
     <CircleChart data={this.state.data[this.state.index].calorieData} />
     </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

      