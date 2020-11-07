import logo from './logo.svg';
import {style} from './style/index.scss'
import {Generator} from "./components/generator";
import {Congrat} from "./components/congrat";
import {Component} from "react";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finish: false
        }
        this.finish = this.finish.bind(this)
    }

    finish(){
        this.setState({finish: true})
    }

    render(props, state) {
        return (
            <div className="App">
                <header className="text-center">
                    <h1>Mahjong</h1>
                </header>
                <Generator setFinish={this.finish}/>
                {this.state.finish &&
                <Congrat/>}
            </div>
        )
    }
}
