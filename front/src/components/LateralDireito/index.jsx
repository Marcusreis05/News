'use client'
import './style.css'
import CardNoticia from "../CardNoticia"
import { truncateWithEllipses } from '../../libs/truncateWithEllipses';

export const LateralDireito = ({ noticias }) => {
  console.log('noticia', noticias)
  const noticiasComElipse = () => {
      return noticias.map((noticia, index) => {
      noticia.texto = truncateWithEllipses(noticia.texto, 100)
      return (
        <div style={{marginBottom: '20px'}} key={index}>
          <CardNoticia noticia={noticia}/>
        </div>
      )
    })
  }
  return (
    <div className="ultimasnoticias">
      <div className="cabecalho">Ultimas noticias</div>
      <div style={{marginBottom:'30px'}}>
        { noticias.length && noticiasComElipse() }
      </div>
    </div>
  )
}

export default LateralDireito
