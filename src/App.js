import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='bg-white'>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="about" element={<About></About>} />
      <Route path="blogs" element={<Blogs></Blogs>} />
      <Route path="*" element={<NotFound></NotFound>} />
     </Routes>
    </div>
  );
}

export default App;
