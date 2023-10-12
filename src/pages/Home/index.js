import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <div className="container">
                <Button variant="primary">Primary</Button>
            </div>
           
            <Rodape />
        </>
    )
}

export default Home;