import "../css/style.css"
import logo from "../assets/logo.svg";
 
function Header() {


return (
    <header className="header-bg">
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-info container">
          <h1>Fashion Store</h1>
          <nav>
            <ul className="header-menu font-1-m cor-0">
              <li><a href="/">Home</a></li>
              <li><a href="/login">Entrar</a></li>
              <li><a href="/cadastro-produto">Cadastrar Produto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;