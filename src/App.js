import LayoutMain from './components/Layout/Main/Main';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/index.scss';
import { useEffect } from 'react';
import setUser from './store/actionCreators/auth/set_user';
import setIsAuth from './store/actionCreators/auth/set_is_auth';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const user = JSON.parse(localStorage.getItem('user'));
      
      dispatch(setUser(user));
      dispatch(setIsAuth(true));
    }
  }, []);

  return (
    <LayoutMain />      
  );
}

export default App;
