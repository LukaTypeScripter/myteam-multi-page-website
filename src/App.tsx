
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
const App = () => {
  return (
    <Router>
      <div className='main'>
          <Header />
         <Routes>
          <Route  path="/" element={<Main />} />
          <Route path="/about" element={<>wee</>} />
          <Route path="/contact" element={<>wee</>} />
        </Routes> 
        <Footer />
        </div>
       
    </Router>
  );
}

export default App;