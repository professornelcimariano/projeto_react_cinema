import Banner from "components/Banner";
import Titulo from "components/Titulo";
import CardsF from "components/CardsF";
import ImagesF from "components/ImagesF";
import Col2F from "components/Col2F";
import AccordionF from "components/AccordionF";
// import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
    return (
        <>
            <Banner imagem="banner-1" />            
                <Titulo>
                    Últimos Lançamentos
                </Titulo>
                <CardsF />
                <ImagesF />
                <Col2F />
                <AccordionF />
        </>
    )
}

export default Home;