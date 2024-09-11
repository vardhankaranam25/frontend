
//not changed -- vardhan


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Donate from './components/Donate'
import Login from './components/Login'
import UserHome from './components/UserHome'
import Background from './components/Background'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer_User from './components/Volunteer-User'
import SignUp from './SignUp'
import Ngohome from './components/Ngohome'
import NgoDonate from './components/NgoDonate'
import NgoGetVolunteers from './components/NgoGetVolunteers'
import NgoFundStatus from './components/NgoFundStatus'
import NgoRaiseFund from './components/NgoRaiseFund'
import Fund from './components/Fund'
import NGOApp from "./components/NGO-App";
import VolunteerOpportunityForm from "./components/VolunteerOpportunityForm";
import UsersVolOpps from './components/UsersVolOpps';
import MyDonations from './components/MyDonations'
import MyVolunteer from './components/MyVolunteer'
import { Provider } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router >
      
    
      <div className="container">
     
       
      </div>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Donate" element={<Donate/>} />
      <Route path="/UserLogin" element={<UserHome/>} />
      <Route path="/UserHome" element={<UserHome/>} />
      <Route path="/Volunteer" element={<Volunteer_User/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/NgoHome" element={<Ngohome/>} />
      <Route path="/CheckDonations" element={<NgoDonate/>} />
      <Route path="/CheckVolunteer" element={<NgoGetVolunteers/>} />
      <Route path="/RaiseFund" element={<NgoRaiseFund/>} />
      <Route path="/FundStatus" element={<NgoFundStatus/>} />
      <Route path="/Fund" element={<Fund/>} />
      <Route path="/NGO-Home" element={<NGOApp />} />
      <Route path="/RequestVolunteer" element={<VolunteerOpportunityForm />} />
      <Route path="/NGORequirements" element={<UsersVolOpps />} />
      <Route path="/MyDonations" element={<MyDonations />} />
      <Route path="/MyVolunteering" element= {<MyVolunteer/>} />
      <Route path="/Logout" element= {<Login/>} />
      </Routes>
   </Router>
    </>
  )
}

export default App
