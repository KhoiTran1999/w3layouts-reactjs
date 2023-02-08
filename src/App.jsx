import './App.scss';
import './reset.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Form from './components/Form/Form';
import Address from './components/Address/Address';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>
      <Form/>
      <Map/>
      <Address/>
      <Footer/>
    </div>
  );
}

export default App;
