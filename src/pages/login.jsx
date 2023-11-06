import "../css/style.css"
import Header from "../interpolacao/header"
import Footer from "../interpolacao/footer"
import LoginConteudo from "../interpolacao/login-conteudo"

function Login(){

    return(
        <div>
            <Header/>
            <LoginConteudo/>
            <Footer/>
        </div>
    )

}

export default Login;