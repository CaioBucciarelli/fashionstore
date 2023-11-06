import "../css/style.css"
import imgConteudoHome from "../assets/fotos/imagem-conteudo.jpg";

function HomeConteudo() {
return (
    <article className="porque-nos-bg">
      <div className="porque-nos container">
        <div className="porque-nos-conteudo">
          <span className="font-2-l-b cor-9">Porque ser fashion</span>
          <h2 className="font-1-xl cor-12">Descubra o valor de ser estiloso e se vestir bem para si mesmo.</h2>
          <p className="font-2-l cor-8">O estilo e a forma como nos vestimos têm um impacto significativo em nossas vidas. Muito mais do que simplesmente seguir as últimas tendências da moda, o estilo pessoal e o ato de se vestir bem representam uma expressão única de quem somos e como nos relacionamos com o mundo. Neste texto, exploraremos o verdadeiro valor do estilo e do vestir bem, indo além do superficial para descobrir por que isso importa tanto.</p>
        </div>
        <div className="porque-nos-imagem">
          <img src={imgConteudoHome} alt="Exemplar de peças" />
        </div>
      </div>
    </article>
  )
}

export default HomeConteudo;