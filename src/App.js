import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./pages/search/Search";
import Themes from "./components/themes/Themes";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Themes />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
