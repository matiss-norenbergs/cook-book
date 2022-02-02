import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/create' element={} />
          <Route path='/search' element={} />
          <Route path='/recipes/:id' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
