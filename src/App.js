import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import AppDetail from './components/AppDetails';
import DashBoard from './components/DashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppDetail />} />
        {/* <Route path="homePage" element={<Homepage />} />   *** Can add more route like this example */}
      </Routes>
    </Router>
  )
}

export default App
