import styles from './ImagesF.module.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


function ImagesF() {
    return (
        <section className={styles.imagesf}>
            <Container>
                <Row>
                    <h2> Pra Maratonar </h2>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-1.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-2.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-3.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-4.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-5.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-6.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-7.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <figure>
                            <Image src="/images/images-8.jpg" fluid />
                        </figure>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ImagesF;