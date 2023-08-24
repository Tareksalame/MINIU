import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignIn from './components/SignIn';
import { useState } from 'react';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import FirstPage from './components/FirstPage';
import { UsersProvider } from './userContext';
function App() {

  return (
    <div className="App">
      <UsersProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/BusinessCard' element={<SignIn/>}/>
        <Route path='/DigitalMenu' element={<SignUp/>}/>
        <Route path='/OurProductsDigitalMenu' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
