import Banner from "components/Banner";
import Titulo from "components/Titulo";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            <Banner imagem="banner-1" />
            <Titulo>
                <h2>Lançamentos de Filmes</h2>
            </Titulo>
            <div className="container">
                <Button variant="primary">Primary</Button>
            </div>          
           
        </>
    )
}

export default Home;