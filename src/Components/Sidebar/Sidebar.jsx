import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCategories } from '../../features/products/categoriesSlice'
import { fetchProducts } from '../../features/products/productsSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const sidebarContent = useSelector(selectAllCategories).map(ele => (
    <li onClick={() => dispatch(fetchProducts(ele))}>{ele}</li>
  ))
  return (
    <aside>
      <ul>{sidebarContent}</ul>
    </aside>
  )
}

export default Sidebar
