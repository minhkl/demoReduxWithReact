/**
 * Created by minhluong on 10/6/17.
 */
const initialState = {balance: 0}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'DEPOSIT': {
            const newBalance = state.balance + action.amount
            return {balance: newBalance}
        }
        case 'WITHDRAW': {
            if (state.balance >= action.amount) {
                const newBalance = state.balance - action.amount
                return {balance: newBalance}
            } else {
                return state
            }
        }
        default:
            return state
    }
}