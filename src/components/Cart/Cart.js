import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shiping = 0;
    if(grandTotal > 35){
        shiping = 0;
    }
     if(grandTotal > 15){
        shiping = 4.99;
    }
    else if (grandTotal > 0){
        shiping = 12.99;
    }
    const tax = total /10;
    var grandTotal = (total + shiping + tax).toFixed(2)

    return (
        <div>
            <h3>Order Summary</h3>
           <p>Items ordered :{cart.length}</p>
            <p>Product Price : {(total).toFixed(2)}</p>
            <p><small>Tax + VAT : {(tax).toFixed(2)}</small></p>
           <p><small>Shiping Cost : {shiping}</small></p>
            <p>Total Price :{grandTotal}</p>
            
        </div>
    );
};

export default Cart;