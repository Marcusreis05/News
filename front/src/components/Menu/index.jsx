'use client'
import './style.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSeedling, faHouse, faCartShopping, faMicrochip, faPenClip, faBox  } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const[menuLateral, setMenuLateral] = useState(false)
  const router = useRouter()

  return (
    <>
        <nav className='menu'>
          <div onClick={()=> setMenuLateral(!menuLateral)} className='menuBars'><FontAwesomeIcon icon={faBars} size='2x' color='#333'  /></div>
          <div className='logo'><FontAwesomeIcon icon={faSeedling} size='2x' color='#333' />Compasso</div>
          <button onClick={() => router.push('/login')}>Login</button>
        </nav>

    {menuLateral &&
        <div className='menu_lateral'>
          <button className='fechar' onClick={()=> setMenuLateral(!menuLateral)}>Fechar</button>
          <ul>
            <a href="/home"><li>Home</li></a>
            <a href="/noticias/produto"><li>Produto</li></a>
            <a href="/noticias/tecnologia"><li>Tecnologia</li></a>
            <a href="/noticias/rh"><li>RH</li></a>
            <a href="/noticias/vendas"><li>Vendas</li></a>
          </ul>
        </div>}
    </>
  )
}

export default Menu