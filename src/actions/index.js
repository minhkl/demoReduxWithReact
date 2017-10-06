/**
 * Created by minhluong on 10/6/17.
 */
export function actionDeposit(amount) {
    return {
        type: 'DEPOSIT',
        amount: amount
    }
}

export function actionWithdraw(amount) {
    return {
        type: 'WITHDRAW',
        amount: amount
    }
}

