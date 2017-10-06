/**
 * Created by minhluong on 10/6/17.
 */
import App from './App'
import { connect } from 'react-redux'
import {actionDeposit, actionWithdraw} from './actions'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        deposit: function(amount) {
            dispatch(actionDeposit(amount))
        },
        withdraw: function(amount) {
            dispatch(actionWithdraw(amount))
        }
    }
}

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppWrapper