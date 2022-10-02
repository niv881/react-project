import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstMenu from './component/FirstMenu';
import About from './component/About';
import Services from './component/services';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstMenu/>} />
      <Route path = '/About' element ={<About/>} />
      <Route path = '/Services' element = {<Services/>} />
     </Routes>
  );
}

export default App;
