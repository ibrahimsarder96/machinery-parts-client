import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';

function App() {
  return (
    <div className='bg-white'>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="about" element={<About></About>} />
      <Route path="purchase/:productId" element={<RequireAuth>
        <Purchase></Purchase>
        </RequireAuth>} />
      <Route path="blogs" element={<Blogs></Blogs>} />
      <Route path="login" element={<Login></Login>} />
      <Route path="signup" element={<SignUp></SignUp>} />
      <Route path="dashboard" element={<RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
      <Route path="*" element={<NotFound></NotFound>} />
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
