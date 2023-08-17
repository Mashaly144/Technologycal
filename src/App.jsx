import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Header from './ui/Headers/Header';
import Footer from './ui/Footers/Footer';
import FeaturesPage from './pages/Features/FeaturesPage';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/features' element={<FeaturesPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
