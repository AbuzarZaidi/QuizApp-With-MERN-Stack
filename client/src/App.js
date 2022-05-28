import './App.css';
import Navbar from './components/Navbar'
import CreateQuiz from './pages/CreateQuiz';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <CreateQuiz/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
