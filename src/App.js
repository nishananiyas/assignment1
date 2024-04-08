import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
   return (
    <div className="App">
     <Nav/>
     {/* <Form/> */}
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>


     </Routes>
    </div>
  );
}

export default App;
