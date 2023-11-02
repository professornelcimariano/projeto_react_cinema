import styles from './CardsF.module.css';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';

function CardsF({ id, imgurl, titleurl, title, text }) {
    return (

        <Col xs={12} md={4} className={styles.cards}>
            <Link className={styles.cardslink} to={`./filme/${titleurl}`}>
                <Card>
                    <figure className={styles.cardsimg}>
                        <Card.Img variant="top" src={imgurl} />
                    </figure>
                    <Card.Body className={styles.cardsbody}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col >
    )
}

export default CardsF;