import styles from './Col2F.module.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


function Col2F() {
    return (
        <section className={styles.col2f} style={{ backgroundImage: "url('./images/banner-1.png')" }}>
            <Container className={styles.bx}>
                <Row>
                    {/* <h2> Avengers: Endgame </h2> */}
                    <Col xs={12} md={6} className="mb-3">
                        <figure>
                            <Image src="/images/img-1.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <h2>Baixe para assistir offline</h2>
                        <p><b>Rating 9.6 <br /> Time 2h 50 min </b></p>
                        <p>
                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Col2F;