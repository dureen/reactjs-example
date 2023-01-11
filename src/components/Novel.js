import {Container, Card, Button} from 'react-bootstrap';

import img from '../assets/images/logo192.png';

const Novel = () => {
    return (
        <div>
            <Container className='bg-light bg-opacity-25 py-3'>
                <h3>Novel</h3>
                <Container>
                    <div class="row row-cols-3">
                    <div class="col">
                            <Card bg='dark' text='light'>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col">
                            <Card bg='dark' text='light'>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col">
                            <Card bg='dark' text='light'>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
};

export default Novel