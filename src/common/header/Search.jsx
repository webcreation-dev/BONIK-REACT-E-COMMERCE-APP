import React from "react"
import logo from "../assets/images/logo.svg"
import { useSelector } from 'react-redux';


const Search = () => {

    const cartItem = useSelector((state) => state.addToCartReducer.cartItems);


    window.addEventListener('scroll', function () {
        const search = document.querySelector('.search');
        search.classList.toggle("active", window.scrollY > 100);
    });

    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width" >
                        <img src={logo} alt="" />
                    </div>

                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder='Search and hit enter ...' />
                        <span>All Category</span>
                    </div>

                    <div className="icon f_flex width" >
                        <i className="fa fa-user icon-circle" ></i>
                        <div className="cart">
                            <a href="/cart">
                                <i className="fa fa-shopping-bag icon-circle" ></i>
                                <span>{ cartItem.length === 0 ? "" : cartItem.length }</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search