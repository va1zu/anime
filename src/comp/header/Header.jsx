import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Header.module.css'
import logo from '../../assets/logo.png'

const header = () => {
  return (
    
    <div className={cl.headerMenu}>
    <div className={cl.container}>
      <div className={cl.menu}>
        <div className={cl.logo}>
       <NavLink className={cl.logo} to={"/"}>  
         <img src={logo} alt="logo" />
          <h1>aniwelcom</h1>
          </NavLink>
        </div>
        <div className={cl.buttonMenu}>
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/Liders"}>Лидеры</NavLink>
          <NavLink to={"/Follow"} className={cl.follow}>Избранное</NavLink>
          <div className={cl.searchBar}>
            <input type="text" placeholder="Поиск" />
          </div>
          <NavLink to={"/"} className={cl.login}>Вход</NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default header
