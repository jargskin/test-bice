/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.scss';

const Header = () => (
  <header>

    <div className="header-top container">
      <a className="bicevida_logo" href="https://www.bicevida.cl">
        <img src="https://cdn.bicevida.cl/wp-content/uploads/2020/01/logo-bicevida.svg" />
      </a>

      <div className="bicevida_search">
        <form action="https://www.bicevida.cl/resultado-de-busqueda/" method="get">
          <input className="ui-autocomplete-input autocomplete" name="sk" type="text" placeholder="¿Qué estás buscando?" autoComplete="off" data-btn-close="" />
          <a className="icon-buscar" href="#"> </a>
        </form>
      </div>
      <a className="btn btn-secondary" href="https://auth.bicevida.cl/auth/realms/usuarios-externos/protocol/openid-connect/auth?scope=openid+profile+email&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fportal.bicevida.cl%2Fc%2Fportal%2Flogin&amp;state=4587de174b6cab785df6b6c8019833ac&amp;client_id=bv-liferay" target="_blank">
        <span> Sucursal Virtual</span>
        {' '}
        <i className="icon-sucursal" />
        {' '}
      </a>

      <a href="#" className="btn btn-primary btn-menu-mobile">Menu</a>
    </div>
    <nav className="bicevida_nav">
      <div className="container">
        <ul id="menu-menu-principal" className="">
          <li id="menu-item-890" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-890">
            <a className="sv_link_fx" href="http://#" data-first-level="desplegar">Rentas Vitalicias</a>
            <ul className="bicevida_sub-menu" style={{ display: 'none' }}>
              <li id="menu-item-6339" className="btn-destacado menu-item menu-item-type-post_type menu-item-object-page menu-item-6339"><a className="sv_link_fx" href="https://www.bicevida.cl/todo-sobre-rentas-vitalicias/">Todo sobre Rentas Vitalicias</a></li>
              <li id="menu-item-894" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-894"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/renta-vitalicia-previsional/">Renta Vitalicia Previsional</a></li>
              <li id="menu-item-6950" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-6950"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/renta-privada/">Renta Privada</a></li>
              <li id="menu-item-891" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-891"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/credito-de-consumo/">Crédito de Consumo</a></li>
            </ul>
          </li>
          <li id="menu-item-801" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-801">
            <a className="sv_link_fx" href="http://#" data-first-level="desplegar">Seguros Personales</a>
            <ul className="bicevida_sub-menu" style={{ display: 'none' }}>
              <li id="menu-item-802" className="btn-destacado menu-item menu-item-type-post_type menu-item-object-page menu-item-802"><a className="sv_link_fx" href="https://www.bicevida.cl/seguros-individuales/">Todo sobre Seguros Personales</a></li>
              <li id="menu-item-507" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-507"><a className="sv_link_fx" href="https://www.bicevida.cl/tipos-productos/seguros-con-ahorro/">Seguros con Ahorro</a></li>
              <li id="menu-item-508" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-508"><a className="sv_link_fx" href="https://www.bicevida.cl/tipos-productos/seguros-de-vida-y-salud/">Seguros de Vida y Salud</a></li>
              <li id="menu-item-509" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-509"><a className="sv_link_fx" href="https://www.bicevida.cl/tipos-productos/seguros-con-apv/">Seguros con APV</a></li>
            </ul>
          </li>
          <li id="menu-item-78" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-78">
            <a className="sv_link_fx" href="https://www.bicevida.cl/seguros-colectivos/" data-first-level="desplegar">Seguros Colectivos</a>
            <ul className="bicevida_sub-menu" style={{ display: 'none' }}>
              <li id="menu-item-1959" className="btn-destacado menu-item menu-item-type-post_type menu-item-object-page menu-item-1959"><a className="sv_link_fx" href="https://www.bicevida.cl/seguros-colectivos-2/">Todo sobre Seguros Colectivos</a></li>
              <li id="menu-item-4741" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4741"><a className="sv_link_fx" href="https://mipymesegura.bicevida.cl/?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_content=Home-Menu-MiPymeSegura">Mi Pyme Segura</a></li>
              <li id="menu-item-908" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-908"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/temporal-de-vida/">Temporal de Vida</a></li>
              <li id="menu-item-906" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-906"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/complementario-de-salud/">Complementario de Salud</a></li>
              <li id="menu-item-2268" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2268"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/catastrofico/">Catastrófico</a></li>
              <li id="menu-item-905" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-905"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/dental/">Dental</a></li>
              <li id="menu-item-903" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-903"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/accidentes-personales/">Accidentes Personales</a></li>
              <li id="menu-item-904" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-904"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/escolaridad/">Escolaridad</a></li>
              <li id="menu-item-907" className="menu-item menu-item-type-post_type menu-item-object-productos menu-item-907"><a className="sv_link_fx" href="https://www.bicevida.cl/productos/desgravamen/">Desgravamen</a></li>
              <li id="menu-item-2542" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2542"><a className="sv_link_fx" href="https://www.bicevida.cl/beneficios/">Beneficios</a></li>
            </ul>
          </li>
          <li id="menu-item-882" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-882">
            <a className="sv_link_fx" href="http://#" data-first-level="desplegar">Compra Online</a>
            <ul className="bicevida_sub-menu" style={{ display: 'none' }}>
              <li id="menu-item-6516" className="btn-destacado menu-item menu-item-type-custom menu-item-object-custom menu-item-6516"><a className="sv_link_fx" href="https://eligetuseguro.bicevida.cl/?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=EligeTuSeguro">Elige Tu Seguro</a></li>
              <li id="menu-item-6845" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6845"><a className="sv_link_fx" href="https://ventaenlinea.bicevida.cl/venta_en_linea_bicevida/simulador-ahorro?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=SeguroconAhorro-Miat">Ahorro inteligente Mí.@</a></li>
              <li id="menu-item-6672" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6672"><a className="sv_link_fx" href="https://ventaenlinea.bicevida.cl/venta_en_linea_bicevida/seguro-al-deceso-1.html?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=SeguroDeceso">Seguro de Deceso</a></li>
              <li id="menu-item-6505" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6505"><a className="sv_link_fx" href="https://eligetuseguro.bicevida.cl/contratacion/seguros/viaje-protegido?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=Texto_ViajeProtegido">Viaje Protegido</a></li>
              <li id="menu-item-6503" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6503"><a className="sv_link_fx" href="https://ventaenlinea.bicevida.cl/venta_en_linea_bicevida/seguro-viaje-frecuente.html?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=Texto_ViajeFrecuente">Viaje Frecuente</a></li>
              <li id="menu-item-6504" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6504"><a className="sv_link_fx" href="https://ventaenlinea.bicevida.cl/venta_en_linea_bicevida/seguro-vida-activa-full.html?utm_source=BICEVIDA&amp;utm_medium=Referral&amp;utm_campaign=Menu&amp;utm_content=Texto_VidaActiva">Vida Activa</a></li>
            </ul>
          </li>
          <li id="menu-item-2058" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2058">
            <a className="sv_link_fx" href="https://www.bicevida.cl/servicios-online/" data-first-level="desplegar">Servicios Online</a>
            <ul className="bicevida_sub-menu" style={{ display: 'none' }}>
              <li id="menu-item-2068" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2068"><a className="sv_link_fx" href="https://www.bicevida.cl/siniestros/">Denuncio de Siniestros Seguros Personales</a></li>
              <li id="menu-item-2059" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2059"><a className="sv_link_fx" href="https://www.bicevida.cl/centro-de-ayuda/#selector_sucursal">Sucursales y Horarios</a></li>
              <li id="menu-item-2061" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2061"><a className="sv_link_fx" href="https://www.bicevida.cl/pago-online/">Formas de Pago Seguros Personales</a></li>
              <li id="menu-item-2062" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2062"><a className="sv_link_fx" href="https://www.bicevida.cl/preguntas-frecuentes/">Preguntas Frecuentes</a></li>
              <li id="menu-item-2071" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2071"><a className="sv_link_fx" href="https://cdn.bicevida.cl/wp-content/uploads/2019/07/Politicas.pdf">Políticas de Consultas y Reclamos</a></li>
              <li id="menu-item-2181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2181"><a className="sv_link_fx" href="https://static.bicevida.cl/siniestros/SiniestrosDetectadosYNoReportados.pdf">Siniestros Detectados y No Reportados</a></li>
              <li id="menu-item-6562" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6562"><a className="sv_link_fx" href="https://www.bicevida.cl/acceso-proveedores-y-clientes-bice-vida/">Portabilidad Financiera</a></li>
            </ul>
          </li>
          <li id="menu-item-493" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-493"><a className="sv_link_fx" href="https://www.bicevida.cl/centro-de-ayuda/">¿Necesitas ayuda?</a></li>
          <li id="menu-item-6879" className="btn-circulo menu-item menu-item-type-custom menu-item-object-custom menu-item-6879"><a className="sv_link_fx" href="https://circulo.bicevida.cl/"><img src="https://cdn.bicevida.cl/wp-content/uploads/2020/12/logo-circulo-v2-16.svg" alt="Círculo BICE VIDA" width="130" /></a></li>
          <li id="menu-item-6881" className="btn-entrepensionado menu-item menu-item-type-custom menu-item-object-custom menu-item-6881 bg-blue"><a className="sv_link_fx" href="https://entrepensionados.cl/"><img src="https://cdn.bicevida.cl/wp-content/uploads/2020/12/bv-logo-entrepensionados.svg" width="130" /></a></li>
        </ul>
        {' '}

      </div>
    </nav>
  </header>
);
export default Header;
