import "../css/style.css"
import imgCarousel1 from "../assets/fotos/imagem1.jpg";
import imgCarousel2 from "../assets/fotos/imagem2.jpg";
import imgCarousel3 from "../assets/fotos/imagem3.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Introducao() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 imagem-carousel" src={imgCarousel1} alt="Third slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imagem-carousel" src={imgCarousel2} alt="Third slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imagem-carousel" src={imgCarousel3} alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Introducao;