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
import TaskManagement from './components/taskManagement';
import AdminDoctorDetails from './components/adminDoctorDetails';
import AdminDoctorDetailsEdit from './components/AdminDoctorDetailsEdit';
import DoctorForget from './components/doctorForget';
import DoctorReset from './components/doctorReset';
import { isAdmin, isDoctor, isLoggedIn } from './auth/auth';
import WarningPage from './components/warningPage';
import Chat from './components/chat';
import PatientPageWithChat from './components/patientPageWithChat';
import Testimonials from './components/testimonials';
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
        <Route path="/admin/doctor/:did" element={<AdminDoctorDetails/>}/>
        <Route path="/admin/doctor/edit/:did" element={<AdminDoctorDetailsEdit/>}/>
        <Route path="/doctor/home" element={<DoctorHome/>}/>
        <Route path="/doctor/forget" element={<DoctorForget/>}/>
        <Route path="/doctor/reset" element={<DoctorReset/>}/>
        <Route path="/doctor/patient/:id" element={<PatientPage/>}/>
        <Route path="/doctor/patient/:id/task" element={<TaskManagement/>}/>
        <Route path="/doctor/patient/:id/chat" element={<PatientPageWithChat/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/try/api" element={<Tryapi/>}/>
        </Routes>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
