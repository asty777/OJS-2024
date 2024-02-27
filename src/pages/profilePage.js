import React from 'react';
import ComNavbar from '../components/navbar';
import ComProfile from '../components/profile';
import ComFooter from '../components/footer';

function ProfilePage(){
    return(
        <>
        <ComNavbar/>
        <ComProfile/>
        <ComFooter/>
        </>
    )
}
export default ProfilePage;