import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import AppDetail from './components/AppDetails';
import DashBoard from './components/DashBoard';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/appdetails" element={<AppDetail/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="homePage" element={<Homepage />} />   *** Can add more route like this example */}
      </Routes>
    </Router>
  )
}

export default App
