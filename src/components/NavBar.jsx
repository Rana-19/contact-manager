import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'

const NavBar = () => {
  const{isDark,dispatch}=useContext(ContactContext)
  const changeTheme=()=>{
    dispatch({
        type:"THEME_CHANGE",
    })

}

 
  return (
    <div>
    <nav className={isDark?"navbar navbar-light bg-dark":"navbar navbar-light bg-light text-dark"}>
    <div className="container-fluid ">
         <h1 className={isDark?'display-6 text-light':'display-6 text-dark'}>Contact-Manager</h1>
         <button className={isDark?'btn btn-outline-light':'btn btn-outline-dark'} onClick={changeTheme}>{isDark ?"Light Mode":"Dark Mode"}</button>
    </div>
    </nav>
    </div>
  )
}

export default NavBar