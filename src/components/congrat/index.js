import { Component } from 'react';
import style from './style.scss';

export class Congrat extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Congratulations!',
				desc: "You've done it!"
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}

	exFunc = () => {
		console.log("hey")
	}

	render(props, state) {
		return (
			<section className="congrat">
				<div className="container">
					<h2 className="text-center ex__heading">{this.state.exData.heading}</h2>
					<p className="text-center ex__desc">{this.state.exData.desc}</p>

					<button className='bt' onClick={()=>window.location.reload()}>restart</button>

				</div>
			</section>
		);
	}
}