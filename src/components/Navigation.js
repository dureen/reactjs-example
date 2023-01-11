import {Navbar,Container, Nav} from 'react-bootstrap';
const Navigation = () => {
    return (
        // <div>
        //     HOME | UPDATES | CATEGORIES | ABOUT
        // </div>
        <Navbar variant='dark' className='bg-light bg-opacity-25 mb-2'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href='/'>React Example</Nav.Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className='active' href='/'>HOME</Nav.Link>
                    <Nav.Link href='#updates'>UPDATES</Nav.Link>
                    <Nav.Link href='#categories'>CATEGORIES</Nav.Link>
                    <Nav.Link href='#about'>ABOUT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation