
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';
import ContactForm from './pages/ContactForm/ContactForm';
const App = () => {
  return (
    <Router>
      <div className='main'>
          <Header />
         <Routes>
          <Route  path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes> 
        <Footer />
        </div>
       
    </Router>
  );
}

export default App;