import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar";
import About from "./component/About";
import Personal from "./component/personal";
import Business from "./component/business";
import Onlineservice from "./component/onlineservice";
import RegistrationForm from "./component/create";
import Login from "./component/login";
import AdminLogin from "./admin/adminlogin";
import SidebarComponent from "./admin/sidebar";
import Dashboard from "./admin/dashboard";
import SubbankerForm from "./admin/subbanker";
import AssignLocker from "./admin/assignlocker";
import NotificationComponent from "./admin/notification";
import GeneralSettings from "./admin/setting";
import Footer from "./component/footer";
import TradingChart from "./admin/TradingChart";
import Main from "./component/main";

const AppContent: React.FC = () => {
  const location = useLocation();
  const noNavbarFooterPages: string[] = [
    "/",
    "/adminlogin",
    "/dashboard",
    "/subbanker",
    "/assignlocker",
    "/notification",
    "/sidebar",
    "/setting"
  ];
  const shouldDisplayNavbarFooter = !noNavbarFooterPages.includes(location.pathname);

  return (
    <>
      {shouldDisplayNavbarFooter && <Navbar/>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/onlineservice" element={<Onlineservice />} />
        <Route path="/create" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/sidebar" element={<SidebarComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/TradingChart" element={<TradingChart />} />
        <Route path="/subbanker" element={<SubbankerForm />} />
        <Route path="/assignlocker" element={<AssignLocker />} />
        <Route path="/notification" element={<NotificationComponent />} />
        <Route path="/setting" element={<GeneralSettings />} />
      </Routes>
      {shouldDisplayNavbarFooter && <Footer />}
    </>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
