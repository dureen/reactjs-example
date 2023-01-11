import {Container, Card, Button} from 'react-bootstrap';
import img1 from '../assets/images/comics/image-1.jpg';
import img2 from '../assets/images/comics/image-2.jpg';
import img3 from '../assets/images/comics/image-3.jpg';

const Comic = () => {
    return (
        <div>
            <Container className='bg-light bg-opacity-25'>
                <h3>Comic</h3>
                <Container>
                    <div class="row row-cols-3">
                        <div class="col">
                            <Card bg='dark' text='light'>
                                <Card.Img variant="top" src={img1} />
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
                                <Card.Img variant="top" src={img2} />
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
                                <Card.Img variant="top" src={img3} />
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

export default Comic