/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './index.scss';

const Footer = () => (
  <footer id="footer">
    <div className="bicevida_pre-foo">
      <div className="container">
        <ul>
          <li>
            <a href="https://www.bice.cl/">
              <img src="https://www.bicevida.cl/wp-content/uploads/2019/04/logo-bancobice.png" alt="Banco Bice" />
            </a>
          </li>
          <li>
            <a href="https://www.bice.cl/inversiones">
              <img src="https://www.bicevida.cl/wp-content/uploads/2019/04/logo-bice-inversiones.png" alt="Bice Inversiones" />
              {' '}
            </a>
          </li>
          <li>
            <a href="http://www.bicecorp.com/">
              <img src="https://www.bicevida.cl/wp-content/uploads/2019/04/logo-bice-corp.png" alt="Bice Corp" />
              {' '}
            </a>
          </li>

        </ul>

        <ul id="menu-menu-footer" className="">
          <li id="menu-item-494" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-494"><a href="https://www.bicevida.cl/conocenos/">Conócenos</a></li>
          <li id="menu-item-700" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-700"><a href="https://www.bicevida.cl/documentacion-interes/">Documentación de Interés</a></li>
          <li id="menu-item-491" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491"><a href="https://www.bicevida.cl/centro-de-ayuda/">¿Necesitas ayuda?</a></li>
          <li id="menu-item-663" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-663"><a href="https://www.bicevida.cl/seguridad/">Seguridad</a></li>
          <li id="menu-item-387" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-387"><a href="https://www.bicevida.cl/linea-etica/">Línea Ética</a></li>
          <li id="menu-item-392" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-392"><a href="https://bicevida.hiringroom.com/jobs">Trabaja con nosotros</a></li>
          <li id="menu-item-1695" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1695"><a href="https://www.bicevida.cl/centro-de-ayuda/#selector_sucursal">Sucursales</a></li>
        </ul>
      </div>
    </div>

    <div className="container bicevida_foo">

      <ul className="bicevida_redes">
        <li><a href="https://www.facebook.com/bicevida" target="_blank" className="icon-facebook" title="Facebook" /></li>

        <li><a href="https://twitter.com/bice_vida" target="_blank" className="icon-twitter" title="Twitter" /></li>

        <li><a href="https://www.youtube.com/channel/UCNzbIUVP0ckWGuJ3yFgzsYw" target="_blank" className="icon-youtube" title="Youtube" /></li>

        <li><a href="https://instagram.com/bicevida?igshid=1hvwy2nj0rlzk" target="_blank" className="icon-instagram" title="Instagram" /></li>

      </ul>
      <p>
        Av. Providencia 1806, Santiago. Teléfono
        <a href="tel: 800 2020 22">  800 2020 22</a>
      </p>
      <p> Copyright © BICEVIDA - Todos los derechos reservados.</p>
    </div>
  </footer>
);
export default Footer;
