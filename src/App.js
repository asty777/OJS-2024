// import logo from './logo.svg';
// // import './App.css';
// import ComNavbar from './components/navbar';
// import ComBrand from './components/brand';
// import ComInformation from './components/information';
// import ComSubmission from './components/submission';
// import LoginPage from './pages/login';


// function App() {
//   return (
//     <>
//     <ComNavbar/>
//     <ComBrand/>
//     <ComInformation/>
//     <ComSubmission/>
//     <LoginPage/>
//     </>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/login';
import SubmissionPage from './pages/submissionPage';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profilePage';
import PrivacyPage from './pages/privacyPage';
import ContactPage from './pages/ContactPage';
import RolePage from './pages/rolePage';
import PasswordPage from './pages/passwordPage';
import PublicPage from './pages/publicPage';
import NotificationPage from './pages/notificationPage';
import ProfileApiPage from './pages/ProfileApiPage';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/about/submission" element={<SubmissionPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/about/privacy" element={<PrivacyPage/>} />
            <Route path="/user/profile/indentity" element={<ProfilePage/>} />
            <Route path="/user/profile/contact" element={<ContactPage/>} />
            <Route path="/user/profile/role" element={<RolePage/>} />
            <Route path="/user/profile/password" element={<PasswordPage/>} />
            <Route path="/user/profile/public" element={<PublicPage/>} />
            <Route path="/user/profile/notification" element={<NotificationPage/>} />
            <Route path="/user/profile/APiKey" element={<ProfileApiPage/>} />
          </Routes>  
        </Router>


    </>
  );
}

export default App;
