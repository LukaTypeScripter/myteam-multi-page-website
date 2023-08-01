
import Header from './pages/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='main'>
          <Header />
         <Routes>
          <Route  path="/" element={<>wee</>} />
          <Route path="/about" element={<>wee</>} />
          <Route path="/contact" element={<>wee</>} />
        </Routes> 
        </div>
    </Router>
  );
}

export default App;