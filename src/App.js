import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/index.css';
import LayoutMain from './components/Layout/Main/Main';

function App() {
  return (
    <Router>
      <LayoutMain />      
    </Router>
  );
}

export default App;
