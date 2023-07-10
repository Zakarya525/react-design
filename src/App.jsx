import {Routes, Route} from 'react-router-dom';
import {Suspense, useEffect} from 'react';
import './App.css';
import Error from './components/Error';
import Login from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
import Dashboard from './pages/Dashboard';
import Loading from './components/Loading';
import SideBar from './pages/SideBar';
import ProfileSetting from './pages/ProfileSetting';
import ChangePassword from './pages/ChangePassword';
import VerifyOTP from './components/VerifyOTP';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/Change-Password" element={<ChangePassword />} />
        <Route path="/Profile-Setting" element={<ProfileSetting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
