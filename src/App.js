import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/signup'} element={<Signup />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
