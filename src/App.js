import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Themes from "./components/themes/Themes";
import NotFound from "./components/notFound/NotFound";
import ProctectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Themes />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProctectedRoutes />}>
            <Route path='/create' element={<Create />} />
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
