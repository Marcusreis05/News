'use client'
import { useState } from 'react'
import './style.css'

const CardNoticia = ({ noticia, temHover = false }) => {

  const [isHover, setIsHover] = useState()

  return (
    <div className='noticiaCard'>
      <div style={{position:'relative'}} onMouseEnter={() => setIsHover(temHover ? true : false)} onMouseLeave={() => setIsHover(false)}>
        <div className='popular' style={{opacity: isHover ? '1' : '0'}}>Clique aqui</div>
        <img className='img' src={noticia.img} alt={noticia.titulo} />
      </div>
      <h2 className='titulo'>{noticia.titulo}</h2>
      <p className='texto' dangerouslySetInnerHTML={{ __html: noticia.texto}}/>
      <button className='bnt'>Saber mais...</button>
      <hr />
      <div className='publicado-em'>{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
    </div>
  )
}

export default CardNoticia
