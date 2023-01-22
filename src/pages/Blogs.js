import {Container} from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className='mb-2'>
      <Container className='p-0'>            
      <div class="p-5 bg-light rounded-3">
      <h1>Blog Articles</h1>
      <p>{process.env.REACT_APP_ROOT_API}</p>
      </div>
      </Container>
    </div>
  );
}
export default Blogs;