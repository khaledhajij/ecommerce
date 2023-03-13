import React from 'react'

const ProductCart = props => {
  return (
    <div>
      <div className='product-cart'>
        <div className='custom-container'>
          <img src={props.image} alt='' />
          <p className='title'>{props.title}</p>
        </div>
        <div className='card-on-hover'>
          <div className='background'></div>
          <div className='buttons'>
            <button className='btn btn-light'>Visit product</button>
            <button className='btn btn-light'>{props.price}$</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
