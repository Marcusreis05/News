'use client'
import './style.css'
import CardNoticia from "../CardNoticia"
import { truncateWithEllipses } from '../../libs/truncateWithEllipses';

export const LateralEsquerdo = ({noticia}) => {
  noticia.texto = truncateWithEllipses(noticia.texto, 300)

  return (
    <div className="maisPopular">
      qqqqqqqqqqqqqqqqqqqS
      <div className="cabecalho">Mais popular</div>
      <CardNoticia noticia={ noticia } temHover={true}/>
    </div>
  )
}

export default LateralEsquerdo
