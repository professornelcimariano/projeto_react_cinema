import { Link } from "react-router-dom";
// import logo from './logo.png';
import styles from './Menu.module.css';
import MenuLink from "components/MenuLink";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {
    return (
        <header className={styles.menu}>
            <div className={styles.logo} >
                Cinema
            </div>
            {/* <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <MenuLink url="./">
                    Home
                </MenuLink>
                <MenuLink url="./Favoritos">
                    Favoritos
                </MenuLink>
                <MenuLink url="./Lancamentos">
                    Lancamentos
                </MenuLink>
                <MenuLink url="./Contato">
                    Contato
                </MenuLink>
            </nav> */}
            <div className={styles.links}>
                <Navbar expand="lg" style={{ justifyContent: 'flex-end', textAlign: 'left', width: '100%' }}>
                    {/* <Container> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#999' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <MenuLink url="./">
                                Home
                            </MenuLink>
                            <MenuLink url="./Favoritos">
                                Favoritos
                            </MenuLink>
                            <MenuLink url="./Lancamentos">
                                Lancamentos
                            </MenuLink>
                            <MenuLink url="./Contato">
                                Contato
                            </MenuLink>
                        </Nav>
                    </Navbar.Collapse>
                    {/* </Container> */}
                </Navbar>
            </div>
        </header>
    )
}

export default Menu;

