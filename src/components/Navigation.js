import { NavLink } from "react-router-dom";
import {Navbar,Container, Nav} from 'react-bootstrap';
const Navigation = () => {
    return (
        <Navbar variant='dark' className='bg-light bg-opacity-25 mb-2'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href='/'>React Example</Nav.Link>
                </Navbar.Brand>
                <Nav>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation