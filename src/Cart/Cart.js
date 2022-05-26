import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let total_cost=0;
    cart.map(player=>total_cost+=player.salary);
    return (
        <div>
            <h3>Selected Players: {cart.length}</h3>
            <ol>
                {cart.map(p=>(
                    <li>{p.name}, Cost- ${p.salary} </li>
                ))}
            </ol>
            
            <h4>Total Cost= ${total_cost}</h4>

        </div>
    );
};

export default Cart;