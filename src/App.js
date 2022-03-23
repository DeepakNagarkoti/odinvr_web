import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'

import DashBoard from './components/DashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        {/* <Route path="homePage" element={<Homepage />} />   *** Can add more route like this example */}
      </Routes>
    </Router>
  )
}

export default App
