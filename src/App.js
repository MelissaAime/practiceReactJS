import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Styles.scss";
import "./App.scss";
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { Navbar } from './Sections/Navbar/Navbar';
import { Home } from './Sections/Home/Home';

function App() {
  return (
    <BrowserRouter> 
        
    <Navbar/>

    <Routes>
        <Route path='/' element={ <Home/> } />
        {/* <Route path='/profile' element={ <MyProfile/> } />
        <Route path='/resume' element={ <Resume/> } />
        <Route path='/proyects' element={ <Proyects/> } />
        <Route path='/skills' element={ <Skills/> } />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={ <Navigate to='/' /> } /> */}
    </Routes>
      
  </BrowserRouter> 
  );
}

export default App;
