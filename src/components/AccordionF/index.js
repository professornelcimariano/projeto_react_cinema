// import styles from './AccordionF.module.css';
import Accordion from 'react-bootstrap/Accordion';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';


function AccordionF({ id, titulo, text }) {
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{titulo}</Accordion.Header>
            <Accordion.Body>
                {text}
            </Accordion.Body>
        </Accordion.Item>

    );
}

export default AccordionF;