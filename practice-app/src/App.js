import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* <Route path='/' element={<SomeComponent />}> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
