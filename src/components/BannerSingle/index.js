import styles from './BannerSingle.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function BannerSingle({ imagem, title }) {
    return (
        <div className={styles.bannersingle}
            style={{ backgroundImage: `url('${imagem}')` }}>
            <section>
                <Container>
                    <Row>
                        <Col xs={12} md={12} >
                            <div className={styles.bx}>
                                <h1>{title}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default BannerSingle;