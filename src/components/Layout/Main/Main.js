import './Main.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AppRouter from '../../../router/AppRouter';
import Content from './Content';
import { useSelector } from 'react-redux';
import Sidebar from '../../Menu/Sidebar/Sidebar';

function LayoutMain() {
  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <div className="main-layout">
      <Header/>

      {
        isAuth
        ?
          <div className="main-content content-layout container">
            <Sidebar/>
            <Content className="width-100">
              <AppRouter/>
            </Content>
          </div>
        :
          <Content className="main-content container">
            <AppRouter/>
          </Content>
      }
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;