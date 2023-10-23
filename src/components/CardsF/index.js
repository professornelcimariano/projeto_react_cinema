import styles from './CardsF.module.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function CardsF() {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-1.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-3.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-4.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-5.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-6.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className={styles.cards}>
                        <Card>
                            <Card.Img variant="top" src="/images/movie-8.jpg" />
                            <Card.Body className={styles.cardsbody}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default CardsF;