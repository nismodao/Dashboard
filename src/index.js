'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import 'skeleton-css/css/skeleton.css';
// import 'skeleton-css/css/normalize.css';
import highcharts from 'highcharts';
import CircleChart from './components/CircleChart';
import Template from './components/template';
import Weight from './components/weight';
import './css/style.css'

const mountNode = document.getElementById('root');

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [
        {
          circleDataA: [{name: "A", y: .1}, {name: "Remaining", y: .9}],
          circleDataB: [{name: "B", y: 0.8}, {name: "Remaining", y: 0.2}],
          circleDataC: [{name: "C", y: 0.3}, {name: "Remaining", y: 0.7}],
          calorieData: [{name: "Calories In", y: 1000}, {name: "Calories Out", y: 800}],
          dayData: "DAY 1",
          weightData: "150 lb"
        },

        {
          circleDataA: [{name: "A", y: 0.9}, {name: "Remaining", y: 0.1}],
          circleDataB: [{name: "B", y: 0.5}, {name: "Remaining", y: 0.5}],
          circleDataC: [{name: "C", y: 0.5}, {name: "Remaining", y: 0.5}],
          calorieData: [{name: "Calories In",y: 1500}, {name: "Calories Out", y: 900}],
          dayData: "DAY 2",
          weightData: "180 lb"
        },

        {
          circleDataA: [{name: "A", y: 0.3}, {name: "Remaining", y: 0.7}],
          circleDataB: [{name: "B", y: 0.6}, {name: "Remaining", y: 0.4}],
          circleDataC: [{name: "C", y: 0.8}, {name: "Remaining", y: 0.2}],
          calorieData: [{name: "Calories In", y: 1250}, {name: "Calories Out", y: 1000}],
          dayData: "DAY 3",
          weightData: "160 lb"
        }
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
    return (
      <div>

        <div className="nav">

          <span className="left" onClick={()=>{this.updateBack()}}>&#60;</span>

          <Template day={this.state.data[this.state.index].dayData}/>

          <span className="right" onClick={()=>{this.updateForward()}}>&#62;</span>

        </div>

        <div className="charts">

          <Weight weight={this.state.data[this.state.index].weightData} /> 

          <CircleChart data={this.state.data[this.state.index].circleDataA} 
         title={this.state.data[this.state.index].circleDataA[0].name} />

          <CircleChart data={this.state.data[this.state.index].circleDataB}
         title={this.state.data[this.state.index].circleDataB[0].name} />

          <CircleChart data={this.state.data[this.state.index].circleDataC}
         title={this.state.data[this.state.index].circleDataC[0].name} />

          <CircleChart data={this.state.data[this.state.index].calorieData}
          title={this.state.data[this.state.index].calorieData[0].name.slice(0,8)} />

        </div>

     </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

      