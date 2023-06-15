
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import AddPage from './components/AddPage';
import ViewPage from "./components/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPage/>}></Route>
        <Route path='/view-photos' element={<ViewPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
