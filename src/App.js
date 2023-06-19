import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from '../src/components/Admin/login'
import Dashboard from '../src/components/Admin/dashboard'
import GuestList from '../src/components/Admin/guestList'
import RoomList from '../src/components/Admin/roomList'
import Settings from '../src/components/Admin/settings'
import WithNav from '../src/components/withNav'
import WithoutNav from '../src/components/withoutNav'
import Navbar from "../src/components/Navbar"
import MainLoginPage from './components/MainLoginPage';
import MemberLogin from './components/Member/MemberLogin';
import LandingPage from './components/Member/LandingPage';
function App() {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route element={<WithNav />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/guestList' element={<GuestList />} />
          <Route path='/roomList' element={<RoomList />} />
          <Route path='/settings' element={<Settings />} />     
        </Route>
        <Route element={<WithoutNav />}>
          <Route path='/' element={<MainLoginPage />} />         
          <Route path='/adminlogin' element={<Login />} />
          <Route path='/MemberLogin' element={<MemberLogin />} />
          <Route path='/LandingPage' element={<LandingPage />} />
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
