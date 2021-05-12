import * as React from 'react';
import './footer.scss'
// import ATSign from '../../images/FirmaDigital02-300x88.png'

const Footer = () => (
    <footer>
        <div className="footerContent">
            {/* <div className="flex jcBetween aiCenter">
                <div className="ATSign flex flexColumn jcCenter aiCenter">
                    <p>
                    Calificados como proveedores en uno de Bancos más grandes del País, siendo la entidad Certificadora: SGS.
                    </p>
                    <img src={ATSign} alt="Firma AT" />
                </div>
                <div className="">contenido1</div>
                <div>contenido1</div>
            </div>     */}
            <p>
                Copyright &copy; {new Date().getFullYear()} Alpha Technologies. Todos los derechos reservados.
            </p>
        </div>
        
    </footer>
)


export default Footer;