import styles from './Banner.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Banner({ imagem }) {
    return (
        <div className={styles.capa}
            style={{ backgroundImage: `url('/images/${imagem}.png')` }}>
            <section>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <div className={styles.bx}>
                                <h1>Avengers: Endgame</h1>
                                <p><b>Rating 9.6 <br /> Time 2h 50 min </b></p>
                                <p>
                                    Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                </p>
                                <p>
                                    Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                </p>
                                <Button variant="danger">Assistir Agora :)</Button>{' '}
                                <Button variant="outline-light">Add a minha lista! </Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner;