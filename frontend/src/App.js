import Header from "./components/Header";
import SliderArea from "./components/SliderArea";
import PerformerArea from "./components/PerformerArea";
import AboutArea from "./components/AboutArea";
import ProgramDetails from "./components/ProgramDetails";
import Footer from "./components/Footer";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./components/admindash/AdminDashboard";
import { AuthProvider } from "./context/ContextProvider";
import Update from "./components/update/Update";
import ProtectedRoute from "./ProtectedRoute";
import IdentityCard from "./components/idcard/IdentityCard";
import MapArea from './components/MapArea'
const Home = () => {
  return (
    <>
      <Header />
      <SliderArea />
      <PerformerArea />
     
      <AboutArea />
      {/* <MapArea/> */}
      <ProgramDetails />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/identity-card/:id" element={<IdentityCard/>}/>
          </Route>
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
};

export default App;
