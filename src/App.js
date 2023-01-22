// import logo from './logo.svg';
import './App.css';
// import Navigation from './components/Navigation';
// import Intro from './components/Intro';
// import Comic from './components/Comic';
// import Novel from './components/Novel';
// import Footer from './components/Footer';
import './style/main.css';

// function App() {
//   return (
//     <div className='d-flex flex-column h-100 mBackground'>
//       <header className='text-center'>
//         <Navigation/>
//       </header>
//       <div className='flex-grow-1'>
//         <Intro/>
//         <Comic/>
//         <Novel/>
//       </div>
//       <Footer/>
//     </div>
//   );
// }


// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;