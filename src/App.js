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

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
                <Route exact path="/">
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
                <Route path="/services">
                    <Services></Services>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
          </Route>
          

                {/* ---------- Route for Projects ---------- */}
                {/* <Route path="/">
                    <DigitalHaat></DigitalHaat>
                </Route>
                <Route path="/">
                    <TechHub></TechHub>
                </Route>
                <Route path="/loan-emi-calculator">
                    <LoanEMI></LoanEMI>
                </Route>
                <Route path="/car-wash">
                    <CarWash></CarWash>
                </Route>
                <Route path="/todo-app">
                    <Todo></Todo>
                </Route>
                <Route path="/office-management">
                    <OfficeManagement></OfficeManagement>
                </Route>
                <Route path="/calculator">
                    <Calculator></Calculator>
                </Route>
                <Route path="/view-foundation">
                    <VIEWFoundation></VIEWFoundation>
                </Route>
                <Route path="/weather-info">
                    <WeatherInfo></WeatherInfo>
                </Route>
                <Route path="/honda-cbr">
                    <HondaCBR></HondaCBR>
                </Route> */}
        </Switch>
        <Footer></Footer>
        </Router>

    </div>
  );
}

export default App;
