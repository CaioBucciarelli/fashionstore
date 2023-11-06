import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import HomeConteudo from "../interpolacao/home-conteudo"
import Footer from "../interpolacao/footer"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <HomeConteudo/>
            <Footer/>
        </div>
    )

}

export default Home;