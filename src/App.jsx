import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './App/Pages/Dashboard/index.jsx';
import AnalyticsPage from './App/Pages/Analytics/index.jsx';
import Approval from './App/Pages/Approval/index.jsx';
import Approve from './App/Pages/Approve/index.jsx';
import Pending from './App/Pages/Pending/index.jsx';
import Chat from './App/Pages/Chat/index.jsx';
import Notification from './App/Pages/Notification/index.jsx';
import Testimonial from './App/Pages/Testimonial/index.jsx';
import Bookedappointment from './App/Pages/Booked Appointment/index.jsx';
import CallNewsletter from './App/Pages/Call News letter/index.jsx';
import Team from './App/Pages/Team/index.jsx';
import TextFields from './App/Pages/Text Fields/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/AnalyticsPage' element={<AnalyticsPage />} />
        <Route path='/Approval' element={<Approve />} />
        <Route path='/Approve' element={<Approve />} />
        <Route path='/Pending' element={<Pending />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/Bookedappointment' element={<Bookedappointment />} />
        <Route path='/CallNewsletter' element={<CallNewsletter />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/TextFields' element={<TextFields />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
