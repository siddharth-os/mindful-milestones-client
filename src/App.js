import Footer from './components/footer';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AdminLogin from './components/adminLogin';
import DoctorLogin from './components/doctorLogin';
import AdminHome from './components/adminHome';
import AddDoctor from './components/addDoctor';
import Tryapi from './components/tryapis';
import DoctorHome from './components/doctorHome';
import PatientPage from './components/patientPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/doctor/login" element={<DoctorLogin/>}/>
        <Route path="/admin/home" element={<AdminHome/>}/>
        <Route path="/admin/add" element={<AddDoctor/>}/>
        <Route path="/doctor/home" element={<DoctorHome/>}/>
        <Route path="/doctor/patient/id" element={<PatientPage/>}/>
        <Route path="/try/api" element={<Tryapi/>}/>
        </Routes>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
