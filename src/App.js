/**
 * Created by minhluong on 10/6/17.
 */
import React, { Component } from 'react'
import {actionDeposit, actionWithdraw} from './actions'

class App extends Component {
    constructor() {
        super()
        this.deposit1 = this.deposit1.bind(this)
        this.deposit10 = this.deposit10.bind(this)
        this.withdraw1 = this.withdraw1.bind(this)
        this.withdraw10 = this.withdraw10.bind(this)
    }
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    deposit1() {
        this.props.store.dispatch(actionDeposit(1))
    }
    deposit10() {
        this.props.store.dispatch(actionDeposit(10))
    }
    withdraw1() {
        this.props.store.dispatch(actionWithdraw(1))
    }
    withdraw10() {
        this.props.store.dispatch(actionWithdraw(10))
    }
    render() {
        return (
            <div>
                <p>${this.props.store.getState().balance}</p>
                <div>
                    <button onClick={this.deposit1}>Deposit $1</button>
                    <button onClick={this.deposit10}>Deposit $10</button>
                </div>
                <div>
                    <button onClick={this.withdraw1}>Withdraw $1</button>
                    <button onClick={this.withdraw10}>Withdraw $10</button>
                </div>
            </div>
        )
    }
}
export default App