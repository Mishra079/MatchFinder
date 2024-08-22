import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router';
import Home from './component/Home';
import Registration from './component/Registration';
import Contact from './component/Contact';
import Login from './component/Login';
import Footer from './component/Footer';
import About from './component/About';
function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <header>
      <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/Registration' Component={Registration}></Route>
      <Route path='/Contact' Component={Contact}></Route>
      <Route path='/Login' Component={Login}></Route>
      <Route path='/About' Component={About}></Route>
      </Routes>
     </header>
     <Footer/>
    </div>
  );
}

export default App;
