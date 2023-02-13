import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Guider from './Layout';
import Document from './Document';
import Setting from './Setting';

function App() {
  return (
    <>
      <div className="home-main">
        <div className="home-wrapper">
          <Routes>
            <Route path="/" element={<Guider />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Document />} />
              <Route path="setting" element={<Setting />} />
              <Route path="*" element={<>404</>} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
