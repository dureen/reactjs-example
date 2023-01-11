import {Container, Card, Button} from 'react-bootstrap';
import img4 from '../assets/images/novels/novel-4.jpg';
import img5 from '../assets/images/novels/novel-5.jpg';
import img6 from '../assets/images/novels/novel-1.jpg';


const Novel = () => {
    return (
        <div>
            <Container className='bg-light bg-opacity-25'>
                <h3>Novel</h3>
                <Container>
                    <div class="row row-cols-3">
                    <div class="col">
                            <Card bg='dark' text='light'>
                                <Card.Img variant="top" src={img4} />
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
                                <Card.Img variant="top" src={img5} />
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
                                <Card.Img variant="top" src={img6} />
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