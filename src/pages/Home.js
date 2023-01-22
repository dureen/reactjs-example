import {Container} from 'react-bootstrap';
import Intro from '../components/Intro';
import Comic from '../components/Comic';
import Novel from '../components/Novel';

const Home = () => {
    return (
      <div className='mb-2'>
        <Container className='p-0'>            
        <div class="p-5 bg-light rounded-3">
          {/* <h1>Home</h1> */}
          <Intro/>
        <Comic/>
        <Novel/>
        </div>
        </Container>
      </div>
    );
  }
  export default Home;