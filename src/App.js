import './App.css';
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
