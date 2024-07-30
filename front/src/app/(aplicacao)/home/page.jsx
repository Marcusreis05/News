'use client'

import './style.css'
import Noticia from "../../../components/Noticia/index"
import LateralEsquerdo from "../../../components/LateralEsquerdo/index"
import LateralDireito from "../../../components/LateralDireito/index"
import { useEffect, useState } from "react"
import axios from "axios"

const HomePage = () => {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try{
      const result = await axios.get('http://localhost:8080/noticias');
      setNoticias(result.data);
    }catch (error){
      alert(error.response.data.message)
    }
  }

  const getNoticiaMaisPopular = () => {
    if (noticias) {
      return noticias.find(noticia => noticia.isPopular)
    }
  }

  const getUltimasNoticias = () => {
    if (noticias) {
      return noticias.filter(noticia => noticia.isUltimas)
    }
  }

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <div className='grid-home'>
        { getNoticiaMaisPopular() && <LateralEsquerdo noticia={getNoticiaMaisPopular()}/> }
        <div>
          {
            noticias.map(noticia =>
              <Noticia key={noticia.id} noticia={noticia} />)
          }
        </div>
        { getUltimasNoticias() && <LateralDireito noticias={getUltimasNoticias()}/> }
    </div>
  )
}

export default HomePage
