import { LuShoppingBag } from 'react-icons/lu'
import Logo from '../../assets/logo.png'

import '../../Styles/Header/Header.sass'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="left-items">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
                <h1>D&D Food Co.</h1>
            </div>
        </div>
        <div className="right-items">
          <a href="Menu">Menu</a>
          <a href="about-us">About us</a>
          <a href="contact">Contact</a>
          <LuShoppingBag className='shopping icon'/>
          <a className='cta' href="/place-your-order">Place an order</a>
        </div>
    </div>
  )
}

export default Header