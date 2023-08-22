import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignIn from './components/SignIn';
import { useState } from 'react';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import FirstPage from './components/FirstPage';
import { UsersProvider } from './userContext';
function App() {
  const[user,setUser] = useState({})

  return (
    <div className="App">
      <UsersProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        {/* <Route path='/signin' element={<SignIn user={user} setUser={setUser}/>}/> */}
        <Route path='/goAhead' element={<SignUp/>}/>
        <Route path='/OurProducts' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
