import "../css/style.css"
 
function ContatoConteudo() {


return (
  <main className="cadastro-conteudo">
      <h1 className="font-1-xl cor-p3">Cadastro Produto</h1>
      <form action="" className="form">
        <div className="grid-form">
          <div className="form-div-info">
            <label for="id_produto">ID Produto</label>
            <input type="text" name="id_produto" id="id_produto" placeholder="ID"/>
          </div>
          <div className="form-div-info">
            <label for="marca">Marca</label>
            <input type="text" name="marca" id="marca" placeholder="Marca da peça" />
          </div>
          <div className="form-div-info">
            <label for="marca">Data da Fabricação</label>
            <input type="date" name="data-fabricacao" id="data-fabricacao"/>
          </div>
          <div className="form-div-info">
            <label for="marca">Quantidade em Estoque</label>
            <input type="number" name="quantidade-estoque" id="quantidade-estoque" placeholder="1...2...3"/>
          </div>
        </div>
        <div className="form-div-info">
          <label for="descricao">Descrição</label>
          <textarea name="descricao" id="descricao" cols="30" rows="3"></textarea>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  )
}

export default ContatoConteudo;