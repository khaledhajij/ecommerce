import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import Navbar from './Components/Navbar/Navbar'
import ProductsList from './Components/ProductList/ProductsList'
import { fetchCategories } from './features/products/categoriesSlice'
import { fetchProducts } from './features/products/productsSlice'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/CustomStyling.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
    setTimeout(() => {
      dispatch(fetchProducts())
    }, 1000)
  }, [])
  return (
    <div className='App'>
      <Navbar />
      <ProductsList />
    </div>
  )
}

export default App
