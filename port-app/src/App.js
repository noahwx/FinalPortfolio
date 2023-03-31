import Header from './components/Header';
import Main from './components/Main';
import Favicon from 'react-favicon'
import logo from './logo.svg';
import './index.css';

// Version 0.1.010

function App() {

  return (
    <>
      <Favicon url={logo}/>
      <Header />
      <Main />
    </>
  );
}

export default App;
