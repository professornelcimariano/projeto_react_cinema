import styles from './Lancamentos.module.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Lancamentos() {
    return (
        <Row>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-1.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-3.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-4.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-5.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-6.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className={styles.movie}>
                <Card>
                    <Card.Img variant="top" src="/images/movie-8.jpg" />
                    <Card.Body className={styles.moviebody}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </Row>
        // <footer className={styles.rodape}>
        //     <h2>by Professor Nelci Mariano.</h2>
        // </footer>
    )
}

export default Lancamentos;