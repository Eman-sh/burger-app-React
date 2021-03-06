import React, { Component } from 'react'
import Button from '../../UI/Button/Button'


export class OrderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}:</span> {this.props.ingredients[igKey]}
            </li>
        })

        return (
            <div>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong >Total Price:{this.props.price.toFixed(2)}$</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

        </div>
        )
    }
}

export default OrderSummary

