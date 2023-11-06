import "../css/style.css"
import logo from "../assets/logo.svg";
import Instagram from "../assets/icones/instagram.svg";
import Facebook from "../assets/icones/facebook.svg";
import Youtube from "../assets/icones/youtube.svg";
 
function Footer() {


return (
    <footer class="footer-bg">
    <div class="footer container">
      <img className="footer-logo" src={logo} alt="Fashion Store"/>
      <div class="footer-contato">
        <h3 class="font-2-l-b cor-0">Contato</h3>
        <ul class="font-2-m cor-5">
          <li><a href="tel:+551199999999">+55 11 9999-9999</a></li>
          <li><a href="mailto:contato@fashionstore.com">contato@fashionstore.com</a></li>
          <li>Rua Fashion Store, 42 - São Paulo</li>
          <li>São Paulo - SP</li>
        </ul>
        <div class="footer-redes">
          <a href="./"><img src={Instagram} alt="instagram"/></a>
          <a href="./"><img src={Facebook} alt="facebook"/></a>
          <a href="./"><img src={Youtube} alt="youtube"/></a>
        </div>
      </div>
      <div class="footer-informacoes">
        <h3 class="font-2-l-b cor-0">Informações</h3>
        <nav class="">
          <ul class="font-1-m cor-5">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Entrar</a></li>
            <li><a href="/cadastro-produto">Cadastrar Produto</a></li>
          </ul>
        </nav>
      </div>
      <p class="footer-copy font-2-m cor-6">Fashion Store © Todos direitos reservados.</p>
    </div>
  </footer>
  )
}

export default Footer;