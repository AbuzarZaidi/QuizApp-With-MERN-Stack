import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/Library';
import Reports from './pages/Reports';
// import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createquiz" element={<CreateQuiz/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/reports" element={<Reports/>} />
      </Routes>
     
     
     
     {/* <Footer/> */}
    </div>
  );
}

export default App;
