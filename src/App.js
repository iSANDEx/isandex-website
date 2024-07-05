import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';

import NavBar from './components/header';
import Home from './components/home';
import Services from './components/services';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

import './styles/App.css';
import { Container } from 'react-bootstrap';

import { useState } from 'react';


function App() {
  // In order to use multiple namespaces/translation files, you need to specify it when calling useTranslation:
  const { t } = useTranslation(['translation']);
  const [displaySingleFrame, setDisplay] = useState(true);
  const multiFrameSPAText = t("demo.multiFrameSPA")
  const singleFrameSPAText = t("demo.singleFrameSPA")
  
  return (
  <>
  <hr/>
  <Form.Switch onClick={() => setDisplay(!displaySingleFrame)} 
               id="single-frame-switch" 
               label={displaySingleFrame ? singleFrameSPAText : multiFrameSPAText}/>
  <hr/>
  <Container className="App">
    <Router>
      <NavBar/>
      {displaySingleFrame ? 
          <>
              <Home/>
              <Services/>
              <Portfolio/>
              <About/>
              <Contact/>
          </>
          :
          <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/services" exact element={<Services/>}/>
              <Route path="/portfolio" exact element={<Portfolio/>}/>
              <Route path="/about" exact element={<About/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
  }
    <Footer/>
    </Router>
  </Container>
  </>
);
}

export default App;
