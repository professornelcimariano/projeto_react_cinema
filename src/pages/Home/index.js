import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Lancamentos from "components/Lancamentos";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



function Home() {
    return (
        <>
            <Banner imagem="banner-1" />
            <Container>
                <Titulo>
                    Lançamentos de Filmes
                </Titulo>
                <Lancamentos />
            </Container>
        </>
    )
}

export default Home;