import {Component} from 'react';
import style from './style.scss';

export class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primes: [],
            cardOne: '',
            cardTwo: ''
        }
        this.showCard = this.showCard.bind(this)
    }

    primeFactorsTo(max) {
        var store = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!store [i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    store[j] = true;
                }
            }
        }
        primes.push.apply(primes, primes)
        this.setState({primes: this.shuffle(primes)});
    }

    showCard(e) {
        console.log(this.state.cardOne)

        if (!e.currentTarget.classList.contains('card--accept') && !e.currentTarget.classList.contains('card--active')) {
            let second = false;
            e.currentTarget.classList.add('card--active')

            if (this.state.cardOne === '') {
                this.setState({cardOne: e.currentTarget})
            } else if (this.state.cardOne !== '') {
                second = true
            }

        console.log(second)

            if (second && this.state.cardOne.dataset.value == e.currentTarget.dataset.value) {
                this.state.cardOne.classList.add('card--accept')
                e.currentTarget.classList.add('card--accept')

                let complete = document.querySelectorAll('.card--accept').length

                if (complete == this.state.primes.length){
                    this.props.setFinish()
                }
            }

            if (second) {
                let secElem = e.currentTarget

                setTimeout(()=>{
                    document.querySelectorAll('.card--active').forEach(item=>{
                        item.classList.remove('card--active')
                    })
                    this.setState({cardOne: ''})
                }, 500)

            }
            console.log('click')
        }
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    componentDidMount() {
        this.primeFactorsTo(50)
    }

    render(props, state) {
        return (
            <section className="section_base">
                <div className="container">
                    <div className='row'>
                        {this.state.primes.map((item, id) => {
                            return <div className='width10' key={id}>
                                <div className='card' data-value={item} onClick={this.showCard}>
                                    {item}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        );
    }
}