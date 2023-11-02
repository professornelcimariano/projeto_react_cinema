import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import CardsF from "components/CardsF";
import ImagesF from "components/ImagesF";
import Col2F from "components/Col2F";

import styles from 'components/AccordionF/AccordionF.module.css';
import AccordionF from "components/AccordionF";

import dbjson from 'json/db.json';
import dbAccordion from 'json/dbAccordion.json';

import dbCardsF from 'json/dbCardsF.json';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>
            <Banner imagem="banner-1" />
            <Titulo>
                Últimos Lançamentos
            </Titulo>
            <section>
                <Container>
                    <Row>
                        {dbCardsF.cardsf.map((json) => {
                            return <CardsF {...json} key={json.id} />
                        })}
                    </Row>
                </Container>
            </section>

            <ImagesF />
            <Col2F />
            <section className={styles.accordionf} >
                <Container>
                    <Row>
                        <h2> Perguntas Frequentes </h2>
                        <Accordion>
                            {dbAccordion.accordion.map((json) => {
                                return <AccordionF {...json} key={json.id} />
                            })}
                        </Accordion>
                    </Row>
                </Container>
            </section>
            {/* <section>
                {dbjson.videos.map((json) => {
                    return [
                        <p> {json.id} {json.titulo} <a target="_blank" href={json.link}>{json.link}</a> </p>
                    ]
                })}
            </section> */}
        </>
    )
}

export default Home;