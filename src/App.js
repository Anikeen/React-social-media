import LayoutMain from './components/Layout/Main/Main';
import useActions from './hooks/useActions';

import './assets/css/bootstrap-reboot.min.css';
import './assets/css/index.scss';

function App() {
  const {setUser, setIsAuth} = useActions();
  
  if (localStorage.getItem('auth')) {
    const user = JSON.parse(localStorage.getItem('user'));
    
    setUser(user);
    setIsAuth(true);
  }
  
  return (
    <LayoutMain />      
  );
}

export default App;
