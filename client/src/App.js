import React,{useEffect,Suspense} from 'react'
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useSelector} from "react-redux";
import {
  setTokenHandler, setIdHandler,setNameHandler
} from "./store/auth";
import Navbar from './components/Navbar'
import CircularProgress from "@mui/material/CircularProgress";
// import CreateQuiz from './pages/CreateQuiz';
// import Home from './pages/Home';
// import Discover from './pages/Discover';
// import Library from './pages/Library';
// import Reports from './pages/Reports';
// import StartQuiz from "./pages/StartQuiz";
import ImageState from './contextapi/ImageState'
const CreateQuiz=React.lazy(()=>import('./pages/CreateQuiz'))
const Home=React.lazy(()=>import('./pages/Home'))
const Discover=React.lazy(()=>import('./pages/Discover'))
const Library=React.lazy(()=>import('./pages/Library'))
const Reports=React.lazy(()=>import('./pages/Reports'))
const StartQuiz=React.lazy(()=>import('./pages/StartQuiz'))
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
      <Suspense fallback={<div style={{display:"flex",justifyContent:"center"}}><CircularProgress/></div>}>
      <Routes>
       
        <Route path="/" element={<Home />} />
       { isLogin&& <Route path="/createquiz" element={<CreateQuiz/>} />}
       { isLogin&& <Route path="/discover" element={<Discover/>} />}
       { isLogin&&<Route path="/library" element={<Library/>} />}
       { isLogin&& <Route path="/reports" element={<Reports/>} />}
       { isLogin&& <Route path="/startquiz" element={<StartQuiz/>} />}
      
      </Routes>
      </Suspense>
      </ImageState>
    </div>
  );
}

export default App;
