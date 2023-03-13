import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import '../Sidebar/Sidebar.css'
import { InputText } from 'primereact/inputtext'

const Navbar = () => {
  const [list, setList] = useState(window.innerWidth > 1100 ? true : false)
  const [showNav, setShowNav] = useState(true)
  // handle states
  let handleClick = () => {
    setList(preValue => !preValue)
  }
  // fade navbar
  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      setShowNav(true)
    } else if (this.oldScroll < this.scrollY) {
      setShowNav(false)
    }
    this.oldScroll = this.scrollY
    console.log(this.oldScroll)
    console.log(this.scrollY)
    delete window.onscroll
  }

  const navbarIcons = ['favorite', 'shopping_cart', 'person'].map(ele => (
    <li key={ele}>
      <span className='material-symbols-outlined'>{ele}</span>
    </li>
  ))

  return (
    <div
      className='custom-navbar'
      style={
        (list ? { overflow: 'initial' } : { overflow: 'hidden' },
        !showNav ? { transform: 'translateY(-100px)' } : null)
      }
    >
      <section>
        <p>FREE SHIPPING FOR $75+ | 50% SELL</p>
        <ul>{navbarIcons}</ul>
      </section>
      <section>
        <div className='logo'>
          <p>KH-store</p>
        </div>
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText placeholder='Search' className='search-input' />
        </span>
        <ul>
          <li>Contacts</li>
          <li>Help</li>
        </ul>
      </section>
    </div>
  )
}

export default Navbar
