import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navBar/navBar';
import Home from './containers/home/home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>     
      </Routes>
    </div>
  );
}

export default App;
