import './App.css';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase/firebase';

// Page Imports
import BookPage from './components/book/BookPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Navbar from './components/common/NavBar';
import NeedAuth from "./components/common/NeedAuth";
import Spinner from "./components/common/Spinner";

function App() {

  const [user, setUser] = useState(null);
  const[userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {userUpdated ? (
        <Routes>
          <Route path="/" element={
            <NeedAuth user = {user}>
              <BookPage user = {user} />
            </NeedAuth>
          }></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      ) : (
        <div className = 'd-flex justify-content-center'>
          <Spinner variant = 'dark'></Spinner>
        </div>
      )}
      
    </BrowserRouter>
  );
}

export default App;