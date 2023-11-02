import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import dbCardsF from 'json/dbCardsF.json';

import BannerSingle from "components/BannerSingle";
import Titulo from "components/Titulo";

import { useParams } from 'react-router-dom';


// import 'bootstrap/dist/css/bootstrap.min.css';

function Filme() {
    const param = useParams();
    const data = dbCardsF.cardsf.find((data) => {
        return data.titleurl === String(param.titleurl);
    })

    console.log(data)

    return (
        <>
            {/* <BannerSingle imagem="banner-5.jpg" title={data.title} /> */}
            <BannerSingle imagem={data.imgurl} title={data.title} />
            <section>
                <Container>
                    <Row>
                        {/* <Col xs={12} md={4}>
                            <figure>
                                <Image src={data.imgurl} fluid />
                            </figure>
                        </Col> */}
                        <Col xs={12} md={12}>
                            <p>{data.text} {data.text} {data.text}</p>
                            <hr />
                            <p> Gênero: Ação
                                <br /> Duração: 131 minutos
                                <br /> Direção: Chad Stahelski
                                <br /> Elenco: Keanu Reeves, Michael Nyqvist, Willem Dafoe, Ian McShane, Adrianne Palicki, Bridget Moynahan, Common, Laurence Fishburne, Ruby Rose, Halle Berry, Anjelica Huston</p>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Filme;