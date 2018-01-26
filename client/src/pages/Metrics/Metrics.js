import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

// class Metrics extends Component {

//   render() {
//     return (
//       <div className="metrics">
//         <h1> Metrics hello Page </h1>
//       </div>
//     )
//   }
// }


class Chart extends Component {

	constructor(props){
		super(props);
		this.state = {
			chartData1:{
				labels: ['dog post', 'rabbit post', 'cat post', 'carrot post', 'pineapple post'],
				datasets: [
					{
						label: 'Views',
						data: [
							100,
							231,
							123,
							22,
							47
						],
						backgroundColor: ["cyan", "green", "white", "blue", "purple"]
					}
				]
			},
			chartData2:{
				labels: ['banana post', 'cheese post', 'brownie post', 'cherry post'],
				datasets: [
					{
						label: "Likes",
						data: [
							15,
							22,
							13,
							19
						],
						backgroundColor: ["blue", "green", "red", "yellow"]
					}
				]
			}

		}
	}

	static defaultProps = {
		displayTitle: true, 
		displayLegend: true,
		legendPosition: 'right'
	}

	render(){
		return(
			<div>
				<div className='chart'>
					<Bar
						data={this.state.chartData1}
						// width={10}
						height={400}
						options={{
							maintainAspectRatio: false,
							title:{
								display: this.props.displayTitle,
								text:'dis the clicks on your post',
								fontSize: 25
							},
							legend: {
								display: this.props.displayLegend,
								// position:this.props.legendPosition
							}
						}}
					/>
				</div>

				<div className='chart2'>
					<Pie
						data={this.state.chartData2}
						// width={10}
						height={500}
						options={{
							maintainAspectRatio: false,
							title:{
								display: this.props.displayTitle,
								text:'this the like counts or something something',
								fontSize: 25
							},
							legend: {
								display: this.props.displayLegend,
								// position:this.props.legendPosition
							}
						}}
					/>
				</div>
			</div>
		)
	}
}









export default Chart;