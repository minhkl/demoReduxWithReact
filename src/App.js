/**
 * Created by minhluong on 10/6/17.
 */
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            balance: 0
        }
        this.deposit1 = this.deposit1.bind(this)
        this.deposit10 = this.deposit10.bind(this)
        this.withdraw1 = this.withdraw1.bind(this)
        this.withdraw10 = this.withdraw10.bind(this)
    }
    deposit1() {
        const newBalance = this.state.balance + 1
        this.setState({
            balance: newBalance
        })
    }
    deposit10() {
        const newBalance = this.state.balance + 10
        this.setState({
            balance: newBalance
        })
    }
    withdraw1() {
        if (this.state.balance >= 1) {
            const newBalance = this.state.balance - 1
            this.setState({
                balance: newBalance
            })
        }
    }
    withdraw10() {
        if (this.state.balance >= 10) {
            const newBalance = this.state.balance - 10
            this.setState({
                balance: newBalance
            })
        }
    }
    render() {
        return (
            <div>
                <p>${this.state.balance}</p>
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