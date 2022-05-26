import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyProtfolio from './Pages/MyPortfolio/MyPortfolio';
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
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';

function App() {
  return (
    <div className='bg-white'>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="portfolio" element={<MyProtfolio></MyProtfolio>} />
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
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
      <Route path="*" element={<NotFound></NotFound>} />
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
