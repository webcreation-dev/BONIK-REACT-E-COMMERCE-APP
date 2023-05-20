import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseCart } from '../../actions/addtocart.action';
import './style.css'

const Cart = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const cartItem = useSelector((state) => state.addToCartReducer.cartItems);
  
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)


  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>

          <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {cartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCartHandler(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => handleDecreaseCart(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart