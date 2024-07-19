import Navbar from "./NavComponents/Navbar"
import Home from "./HomeComponents/Home"
import Service from "./ServicesComponents/Services"
import Specialist from "./SpecialistComponents/Specialist"
import Blog from "./BlogComponents/Blog";
import Contact from "./ContactUsComponents/Contact";
import Login from "./LoginComponents/Login";
import Signup from "./LoginComponents/SignUp";
import Appointment from "./AppointmentComponents/Appointment";
import { useState } from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Loading from "./Components/Loading";
import Patient from "./PatientComponent/Patient";
import PatientRecord from "./PatientRecordComponents/PatientRecord";
import PatientSubRecord from "./PatientSubRecordComponent/PatientSubRecord";
import PatientAll from "./PatientAllComponent/PatientAll";

function App() {
  const [isEntity, setEntity] = useState({
    _id: '',
    name: '',
    role: '',
    createdAt: ''
  })

  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home setLoading = {setLoading}/>} />
        <Route path="services" element={<Service />} />
        <Route path="specialist" element={<Specialist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<Contact setLoading = {setLoading}/>} />
        <Route path="login" element={<Login isEntity={isEntity._id} setEntity={setEntity} setLoading = {setLoading}/>} />
        <Route path="register-as-agni-user" element={<Signup setEntity={setEntity} setLoading = {setLoading}/>} />
        <Route path="appointment" element={<Appointment isEntity={isEntity._id} setEntity = {setEntity} setLoading = {setLoading}/>} />
        <Route path="/patient-entry" element={<Patient isEntity={isEntity._id} setEntity={setEntity} setLoading={setLoading} />} />
        <Route path="/patient-record/:phone" element={<PatientRecord isEntity={isEntity._id} setEntity={setEntity} setLoading={setLoading} />} />
        <Route path="/patient/:id/sub-record/:phone" element={<PatientSubRecord isEntity={isEntity._id} setEntity={setEntity} setLoading={setLoading} />} />
        <Route path="all/patient" element={<PatientAll isEntity={isEntity._id} setEntity={setEntity} setLoading={setLoading} />} />
      </Routes>
    </>
  )
}

export default App
