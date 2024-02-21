import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './App/Pages/Dashboard/index.jsx';
import AnalyticsPage from './App/Pages/Analytics/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/AnalyticsPage' element={<AnalyticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
