import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useSelector} from "react-redux";
import {
  setTokenHandler, setIdHandler,setNameHandler
} from "./store/auth";
import Navbar from './components/Navbar'
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/Library';
import Reports from './pages/Reports';
import StartQuiz from "./pages/StartQuiz";
import ImageState from './contextapi/ImageState'
function App() {
  const dispatch = useDispatch();
  const isLogin= useSelector((state) => state.authData.isLogin);
  useEffect(() => {
    const userData=JSON.parse(localStorage.getItem('userData'))
    if(userData&&userData.token&&new Date(userData.expiration)>new Date()){
      dispatch(setTokenHandler(userData.token));
      dispatch(setIdHandler(userData.userId));
      dispatch(setNameHandler(userData.userName));
    }
   
  }, [dispatch ])
 
  
  
  return (
    <div className="App">
      <ImageState>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       { isLogin&& <Route path="/createquiz" element={<CreateQuiz/>} />}
        <Route path="/discover" element={<Discover/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/startquiz" element={<StartQuiz/>} />
      </Routes>
      </ImageState>
    </div>
  );
}

export default App;
