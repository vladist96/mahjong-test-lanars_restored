import { Component } from 'react';
import style from './style.scss';

export class ExampleComponent extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}

	exFunc = () => {
		console.log("hey")
	}

	render(props, state) {
		return (
			<section className="section_base">
				<div className="container">
					<h2 className="text-center ex__heading">{this.state.exData.heading}</h2>
					<p className="text-center ex__desc">{this.state.exData.desc}</p>

				</div>
			</section>
		);
	}
}