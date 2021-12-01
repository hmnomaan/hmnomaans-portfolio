import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import Technologies from './components/Technologies/Technologies.js';
import Services from './components/Services/Services.js';
import Footer from './components/Footer/Footer.js';
import Blogs from './components/Blogs/Blogs.js';
import WatchPlanet from './components/Projects/Project/WatchPlanet/WatchPlanet.js';
import TourInChina from './components/Projects/Project/TourInChina/TourInChina.js';
import NNBHealthCare from './components/Projects/Project/NNBHealthCare/NNBHealthCare.js';
import SubmitSuccess from './components/SubmitSuccess/SubmitSuccess.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/technologies">
                    <Technologies></Technologies>
                </Route>
                <Route path="/projects">
                    <Projects></Projects>
                </Route>
                <Route path="/submit/success">
                    <SubmitSuccess></SubmitSuccess>
                </Route>
                <Route path="/watchplanet">
                    <WatchPlanet></WatchPlanet>
                </Route>
                <Route path="/tourinchina">
                    <TourInChina></TourInChina>
                </Route>
                <Route path="/nnb-healthcare">
                    <NNBHealthCare></NNBHealthCare>
                </Route>
                <Route path="/expertise">
                    <Services></Services>
                </Route>
                <Route path="/myblogs">
                    <Blogs></Blogs>
          </Route>
                <Route path="/contact">
                    <Contact></Contact>
          </Route>
          

                
        </Switch>
        <Footer></Footer>
        </Router>

    </div>
  );
}

export default App;
