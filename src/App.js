import React from 'react';
import Navbarr from './components/navbar';
import './App.css';
import Register from "./components/register";
import EmailVerification from './components/verifyemail';
import Login from './components/login';
import Getexamlist from './components/getexamlist';
import QuestionPaper from './components/getquestionlist';
import HeaderAndFooterExample from './components/finishexam';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <BrowserRouter>

        <Navbarr/>
         <Routes>
         <Route>
  
             <Route path='/' element={<Register/>}/>
            <Route path='/verifyemail'element={<EmailVerification />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/getexamlist" element={<Getexamlist/>}/>
            <Route path="/getquestionlist/:examId" element={<QuestionPaper />} />
            <Route path="/finishexam" element={<HeaderAndFooterExample />} />
            <Route path="/login" element={<Login />} />
            
        


      </Route>
      </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;




