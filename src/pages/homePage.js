import React from 'react';
// import ComNavbar from './components/navbar';
// import ComBrand from './components/brand';
// import ComInformation from './components/information';
// import ComSubmission from './components/submission';
// import LoginPage from './pages/login';
import ComNavbar from '../components/navbar';
import ComBrand from '../components/brand';
import ComInformation from '../components/information';
import ComFooter from '../components/footer';
import ComAbout from '../components/about';



function HomePage() {
  return (
    <>
    <ComNavbar/>
    <ComBrand/>
    {/* <ComAbout/> */}
    <ComInformation/>
    <ComFooter/>
    </>

  );
}

export default HomePage;