import LayoutMain from './components/Layout/Main/Main';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/index.scss';
import { useEffect } from 'react';
import useActions from './hooks/useActions';

function App() {
  const {setUser, setIsAuth} = useActions();
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const user = JSON.parse(localStorage.getItem('user'));
      
      setUser(user);
      setIsAuth(true);
    }
  }, []);

  return (
    <LayoutMain />      
  );
}

export default App;
