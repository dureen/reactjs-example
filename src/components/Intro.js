import {Container} from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='mb-2'>
            <Container  className='p-0'>            
            <div class="p-5 text-white bg-dark rounded-3">
                <h2>Introduction</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light" type="button">Example button</button>
            </div>
            </Container>
        </div>
    )
};

export default Intro