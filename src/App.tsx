import React from 'react';
import './App.css';
import { BrowserRouter, redirect, Route, RouterProvider, Routes } from 'react-router-dom';
import { Provider } from './store';
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';

function App() {
  return (
    <Provider>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} loader={() => {
            if (!localStorage.getItem('token')) {
              return redirect('/login');
            } else {
              return null;
            }
          }} />
          <Route path='/login' element={<Login />} loader={() => {
            if (localStorage.getItem('token')) {
              return redirect('/');
            } else {
              return null;
            }
          }} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
