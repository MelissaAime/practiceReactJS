import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { Sidebar } from '../Components/Sidebar';
import { Home } from '../Sections/Home/Home'

export const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <Sidebar/>

        <Routes>
            <Route path='/' element={ <Home/> } />
        </Routes>
    </BrowserRouter> 
  );
}