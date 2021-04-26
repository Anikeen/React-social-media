import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/index.scss';
import LayoutMain from './components/Layout/Main/Main';

function App() {
  return (
    <Router>
      <LayoutMain />      
    </Router>
  );
}

export default App;
