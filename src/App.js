import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/signup'} element={<Signup />}></Route>
          <Route index path={'/login'} element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
