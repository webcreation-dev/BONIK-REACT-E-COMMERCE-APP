import {useState} from 'react'
import Slider from "react-slick"
import '../Data'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/addtocart.action';

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick} >
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick} >
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}

const FlashCard = ({ productItems}) => {

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  }
  return (
    <>
      <Slider {...settings}>
        {productItems.map((item) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{item.discount}% Off</span>
                  <img src={item.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{item.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${item.price}.00 </h4>
                    
                    <button onClick={() => addToCartHandler(item)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
)}

export default FlashCard