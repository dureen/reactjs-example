// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Comic from './components/Comic';
import Novel from './components/Novel';
import Footer from './components/Footer';
import './style/main.css';

function App() {
  return (
    <div className='d-flex flex-column h-100 mBackground'>
      <header className='text-center'>
        <Navigation/>
      </header>
      <div className='flex-grow-1'>
        <Intro/>
        <Comic/>
        <Novel/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
