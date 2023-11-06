import "../css/style.css"
 
function SobreConteudo() {


return (
  <main className="login-conteudo">
    <h1 className="font-1-xl cor-p3">Login</h1>
    <form action="" className="form">
      <div className="form-div-info">
        <label for="email">Seu e-mail</label>
        <input type="email" name="email" id="email" placeholder="contato@fashionstore.com"/>
      </div>
      <div className="form-div-info">
        <label for="senha">Sua senha</label>
        <input type="password" name="senha" id="senha" placeholder="1234"/>
      </div>
      <div className="form-div-check">
        <input type="checkbox" name="check" id="check" />
        <label for="check">Manter-me logado</label>
      </div>
      <button type="submit">Logar</button>
    </form>
    <div className="sem-cadastro">
      <p className="cor-8">Ainda não tem conta?</p>
      <a href="/" className="cor-p5">Cadastre-se</a>
    </div>
  </main>
  )
}

export default SobreConteudo;