import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from '../ProductCart/ProductCart'
import '../ProductCart/Product-cart.css'
import '../ProductList/products-list.css'
import {
  selectAllProducts,
  selectProductsStatus
} from '../../features/products/productsSlice'
import Sidebar from '../Sidebar/Sidebar'
import HashLoader from 'react-spinners/HashLoader'
import homeImg from '../../assets/images/pin_12.jpg'

const ProductsList = () => {
  const products = useSelector(selectAllProducts)
  const status = useSelector(selectProductsStatus)
  const productsInTheList = products?.map(product => (
    <ProductCart {...product} key={product.id} />
  ))
  return (
    <div className='products-sidebar'>
      <div className='img-products'>
        <div className='image'>
          <img src={homeImg} alt='' />
        </div>
        {status ? null : (
          <div className='sidebar'>
            <p>Choose a category:</p>
            <Sidebar />
          </div>
        )}
        {status ? (
          <HashLoader className='spinner' />
        ) : (
          <div className='products-list'>{productsInTheList}</div>
        )}
      </div>
    </div>
  )
}

export default ProductsList
